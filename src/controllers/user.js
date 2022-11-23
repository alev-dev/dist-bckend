const userModel = require('../models/user');
const jsonwebtoken = require('jsonwebtoken');
const userController = {
    getUsers: async (req, res) => {
        await userModel
            .find()
            .then((users) => {
                res.json(users);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    getUser: async (req, res) => {
        await userModel
            .findById(req.params.id)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    createUser: async (req, res) => {
        await userModel
            .create(req.body)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    updateUser: async (req, res) => {
        await userModel
            .findByIdAndUpdate(req.params.id, req.body)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    deleteUser: async (req, res) => {
        await userModel
            .findByIdAndDelete(req.params.id)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        await userModel
            .findOne({ email, password })
            .then((user) => {
                console.log(user);
                const { _id, role, name } = user;

                jsonwebtoken.sign({ _id, role, name }, 'secret', (err, token) => {
                    res.json({ auth: true, token });
                });
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = userController;
