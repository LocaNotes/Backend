const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the report function
*/
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