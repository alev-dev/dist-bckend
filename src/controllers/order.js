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
};

module.exports = orderController;
