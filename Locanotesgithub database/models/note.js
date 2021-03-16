const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
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
    body:{
        type: String,
        required: true
    }

}, { timestamps: true });

const note = mongoose.model('note', noteSchema);
module.exports = note;