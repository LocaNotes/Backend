const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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