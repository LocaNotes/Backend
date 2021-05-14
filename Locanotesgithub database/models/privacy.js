const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the privacy function
*/
const privacySchema = new Schema({
    label: {
        type: String,
        required: true
    }
},{timestamps: true});

const privacy = mongoose.model('privacy', privacySchema)
module.exports = privacy;