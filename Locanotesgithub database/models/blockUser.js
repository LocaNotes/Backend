const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockUserSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    blockUserId: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const blockUser = mongoose.model('blockUser', blockUserSchema);
module.exports = blockUser;
