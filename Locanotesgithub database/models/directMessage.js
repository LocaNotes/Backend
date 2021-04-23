const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directMessageSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    recieverId:{
        type:String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

const directMessage = mongoose.model('directMessage', directMessageSchema);
module.exports = directMessage;