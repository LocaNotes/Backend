const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the noteTag function
*/
const noteTagSchema = new Schema ({
    label: {
        type: String,
        required: true
    }
}, {timestamps: true});

const noteTag = mongoose.model('noteTag', noteTagSchema);
module.exports = noteTag;