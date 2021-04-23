const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directMessageSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    recieverId:{
        type:String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true});

const directMessage = mongoose.model('directMessage', directMessageSchema);
module.exports = directMessage;