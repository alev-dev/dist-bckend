const productModel = require('../models/product');

const productController = {
    getProducts: async (req, res) => {
        await productModel
            .find()
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getProductsByCategory: async (req, res) => {
        const { category } = req.params;
        await productModel
            .find({ category })
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getProduct: async (req, res) => {
        await productModel
            .findById(req.params.id)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    createProduct: async (req, res) => {
        await productModel
            .create(req.body)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    updateProduct: async (req, res) => {
        await productModel
            .findByIdAndUpdate(req.params.id, req.body)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    deleteProduct: async (req, res) => {
        await productModel
            .findByIdAndDelete(req.params.id)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = productController;
