const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    Each of these models Follow the same base line for the Schema everything follows this
    this is for the blockUser function
*/
const blockUserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    BlockedUserId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const blockUser = mongoose.model('blockUser', blockUserSchema);
module.exports = blockUser;
