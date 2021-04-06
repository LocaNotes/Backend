const friend = require('../models/friend');

const friend_index = (req, res) => {
    friend.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const friend_add = (req,res) => {
    const userId = req.query.userId
    const friendUserId = req.query.friendUserId;

    const model = {
        userId: userId,
        friendUserId: friendUserId
    }

        const newFriend = new friend(model);

        newFriend.save().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });
}

module.exports = {
    friend_index,
    friend_add,
}