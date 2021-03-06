const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const note = require('../models/note');
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the User function
*/
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    radius: {
        type: Number, 
        required: true
    }
}, { timestamps: true });

const user = mongoose.model('user', userSchema);
module.exports = user;
