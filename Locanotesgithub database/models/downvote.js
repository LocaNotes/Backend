const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the downvote function
*/
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