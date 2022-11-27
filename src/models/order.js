const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        products: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                },
                quantity: Number,
            },
        ],
        paymentForm: String,
        total: Number,
    },
    {
        timestamps: true,
    }
);

module.exports = model('Order', orderSchema);
