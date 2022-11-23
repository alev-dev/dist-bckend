module.exports = (app) => {
    app.use('/users', require('./user'));
    app.use('/comment', require('./comment'));
    app.use('/product', require('./product'));
};
