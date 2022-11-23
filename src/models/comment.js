const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    comment: String,
});

module.exports = model('Comment', commentSchema);
