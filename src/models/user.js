const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    sex: String,
    birthDate: Date,
    role: { type: String, default: 'client' },
    address: {
        cep: String,
        city: String,
        num: String,
        bairro: String,
        logradouro: String,
        uf: String,
    },
});

module.exports = model('User', userSchema);
