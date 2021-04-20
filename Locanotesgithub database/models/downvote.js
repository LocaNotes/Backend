const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const downvoteSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    noteId: {
        type: String,
        required: true
    }
}, {timestamps: true});

const downvote = mongoose.model('downvote', downvoteSchema);
module.exports = downvote;