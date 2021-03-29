const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockUserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    blockUserId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const blockUser = mongoose.model('blockUser', blockUserSchema);
module.exports = blockUser;
