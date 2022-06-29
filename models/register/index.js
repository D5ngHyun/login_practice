const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerUser = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: Number,
    date: { type: Date, default: Date.now },
    token: String,
    tokenExp: Number
});


const Register = mongoose.model('RegisterUser', registerUser);

module.exports = Register;
