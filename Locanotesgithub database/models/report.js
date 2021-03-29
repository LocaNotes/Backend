const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    noteId: {
        type: String,
        required: true
    },
    userId:{
        type:String,
        required:true
    },
    reportTagId: {
        type:String,
        required: true
    }
}, { timestamps: true });

const report = mongoose.model('report', reportSchema);
module.exports = report;