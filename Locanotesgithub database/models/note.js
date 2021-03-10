const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, { timestamps: true });

const note = mongoose.model('note', noteSchema);
module.exports = note;