const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upvoteSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    noteId: {
        type: String,
        required: true
    }
}, {timestamps: true});

const upvote = mongoose.model('upvote', upvoteSchema);
module.exports = upvote;