const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the share function
*/
const shareSchema = new Schema({
    noteId: {
        type: String,
        required: true
    },
    receiverId: {
        type: String,
        required: true
    }

}, { timestamps: true });


const share = mongoose.model('share', shareSchema);
module.exports = share;