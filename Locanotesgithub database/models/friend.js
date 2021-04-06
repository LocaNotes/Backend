const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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