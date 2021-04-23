const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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