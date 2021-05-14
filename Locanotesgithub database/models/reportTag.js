const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the reportTag function
*/
const reportTagSchema = new Schema({
    label: {
        type: String,
        required: true
    }
} , { timestamps: true });

const reportTag = mongoose.model('reportTag', reportTagSchema);
module.exports = reportTag;