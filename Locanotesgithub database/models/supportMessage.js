const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supportMessageSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true});

const supportMessage = mongoose.model('supportMessage', supportMessageSchema);
module.exports = supportMessage;