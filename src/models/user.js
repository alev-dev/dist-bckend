const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, default: 'client' },
});

module.exports = model('User', userSchema);
