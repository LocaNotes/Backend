const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userForgetPasswordSchema = new Schema({
    tempPassword: {
        type: String,
        required: true
    }
}, {timestamps: true})

const userForgetPassword = mongoose.model('note', userForgetPasswordSchema);
module.exports = userForgetPassword;