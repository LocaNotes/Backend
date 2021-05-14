const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the userForgetPassword function
*/
const userForgetPasswordSchema = new Schema({
    userId: {
        type: String, 
        required: true 
    },
    tempPassword: {
        type: String,
        required: true
    }
}, {timestamps: true})

const userForgetPassword = mongoose.model('userForgetPassword', userForgetPasswordSchema);
module.exports = userForgetPassword;