const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteTagSchema = new Schema ({
    label: {
        type: String,
        required: true
    }
}, {timestamps: true});

const noteTag = mongoose.model('noteTag', noteTageSchema);
module.exports = {noteTagSchema, noteTag};