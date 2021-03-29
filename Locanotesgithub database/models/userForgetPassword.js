const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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