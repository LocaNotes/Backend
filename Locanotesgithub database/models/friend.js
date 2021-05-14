const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the friend function
*/
const friendSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    friendUserId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const friend = mongoose.model('friend', friendSchema);
module.exports = friend;