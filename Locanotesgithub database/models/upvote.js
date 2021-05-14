const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the upvote function
*/
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