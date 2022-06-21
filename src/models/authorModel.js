const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required: true
    },
    email: {
        type: email,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)