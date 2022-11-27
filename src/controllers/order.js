const orderModel = require('../models/order');

const orderController = {
    getOrder: async (req, res) => {
        await orderModel
            .findById(req.params.id)
            .populate('user')
            .populate('products.product')
            .then((order) => {
                res.json(order);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOrders: async (req, res) => {
        await orderModel
            .find()
            .populate('user')
            .populate('products.product')
            .then((orders) => {
                res.json(orders);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOrdersByUser: async (req, res) => {
        await orderModel
            .find({ user: req.params.id })
            .populate('user')
            .populate('products.product')
            .then((orders) => {
                res.json(orders);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    createOrder: async (req, res) => {
        await orderModel
            .create(req.body)
            .then((order) => {
                // Remove stock from products
                order.products.forEach(async (product) => {
                    const productModel = require('../models/product');
                    await productModel.findByIdAndUpdate(product.product, {
                        $inc: { stock: -product.quantity },
                    });
                });
                res.json(order);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    updateOrder: async (req, res) => {
        await orderModel
            .findByIdAndUpdate(req.params.id, req.body)
            .then((order) => {
                res.json(order);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    deleteOrder: async (req, res) => {
        await orderModel
            .findByIdAndDelete(req.params.id)
            .then((order) => {
                res.json(order);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getProductsMoreSoldWithImage: async (req, res) => {
        await orderModel
            .aggregate([
                {
                    $unwind: '$products',
                },
                {
                    $group: {
                        _id: '$products.product',
                        total: { $sum: '$products.quantity' },
                    },
                },
                {
                    $sort: { total: -1 },
                },
                {
                    $limit: 5,
                },
                {
                    $lookup: {
                        from: 'products',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'product',
                    },
                },
                {
                    $unwind: '$product',
                },
                {
                    $project: {
                        _id: 0,
                        name: '$product.name',
                        image: '$product.image',
                        total: 1,
                    },
                },
            ])
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOrderLast24Hours: async (req, res) => {
        await orderModel
            .find({
                createdAt: {
                    $gte: new Date(new Date() - 24 * 60 * 60 * 1000),
                },
            })
            .populate('user')
            .populate('products.product')
            .then((orders) => {
                res.json(orders);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = orderController;
