const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userComment = require('../models/comment.js');
userComment.commentSchema;

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
        type: Integer, 
        required: true 
    },
    upvotes: {
        type: Integer, 
        required: true 
    }
}, { timestamps: true });

const note = mongoose.model('note', noteSchema);
module.exports = {noteSchema, note};