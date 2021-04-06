const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    noteId: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }

}, { timestamps: true });

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;