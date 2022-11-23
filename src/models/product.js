const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    category: String,
    image: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
});

module.exports = model('Product', productSchema);
