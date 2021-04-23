const blockUser = require('../models/blockUser');
const user = require('../models/user');

const blocked_index = (req, res) => {
    blockUser.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const block_add = (req, res) => {
    const userId = req.query.userId;
    const BlockedUserId = req.query.BlockedUserId;

    const model = {
        userId: userId,
        BlockedUserId: BlockedUserId
    }

        const newBlock = new blockUser(model);
    
        newBlock.save().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });
}

module.exports = {
    blocked_index,
    block_add,
}
