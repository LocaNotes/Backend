const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userFriendUserSchema = new Schema ({
    timeEstablished: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const userFirendUser = mongoose.model('note', userFriendUserSchema);
module.exports = userFriendUser;
