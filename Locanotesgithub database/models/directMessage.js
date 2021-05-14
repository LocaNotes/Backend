const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the directMessage function
*/
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