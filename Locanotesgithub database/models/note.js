// Imports 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userComment = require('../models/comment.js');
userComment.commentSchema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the note function
*/
const noteSchema = new Schema({
    userId: {
        type: String, 
        required: true 
    },
    privacyId: {
        type: String, 
        required: true
    },
    noteTagId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        requried: true
    },
    body: {
        type: String,
        required: true
    },
    isStory: {
        type: Boolean, 
        required: true
    }, 
    downvotes: {
        type: Number, 
        required: true 
    },
    upvotes: {
        type: Number, 
        required: true 
    }
}, { timestamps: true });
//exports
const note = mongoose.model('note', noteSchema);
module.exports = note;