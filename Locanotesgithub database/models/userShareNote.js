const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShareNoteSchema = new Schema({
    noteId: {
        type: String,
        required: true
    },
    userId:{
        type:String,
        required:true
    }
}, { timestamps: true });

const userShareNote = mongoose.model('userShareNote', userShareNoteSchema);
module.exports = userShareNote;