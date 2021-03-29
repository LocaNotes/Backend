const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const privacySchema = new Schema({
    label: {
        type: String,
        required: true
    }
},{timestamps: true});

const privacy = mongoose.model('privacy', privacySchema)
module.exports = {privacySchema, privacy};