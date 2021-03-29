const mongoose = require('mongoose');
const Schme = mongoose.Schema;

const supportMessageSchema = new mongoose.Schema({
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