const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportTagSchema = new Schema({
    label: {
        type: String,
        required: true
    }
} , { timestamps: true });

const reportTag = mongoose.model('reportTag', reportTagSchema);
module.exports = reportTag;