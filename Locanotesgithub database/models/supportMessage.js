const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the supportMessage function
*/
const supportMessageSchema = new Schema({
    ticket: {
        type:Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true});

const supportMessage = mongoose.model('supportMessage', supportMessageSchema);
module.exports = supportMessage;