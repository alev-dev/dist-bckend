const commentModel = require('../models/comment');

const commentController = {
    getComment: async (req, res) => {
        await commentModel
            .findById(req.params.id)
            .then((comment) => {
                res.json(comment);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getCommentsByProduct: async (req, res) => {
        await commentModel
            .find({ product: req.params.id })
            .then((comments) => {
                res.json(comments);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    createComment: async (req, res) => {
        await commentModel
            .create(req.body)
            .then((comment) => {
                res.json(comment);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = commentController;
