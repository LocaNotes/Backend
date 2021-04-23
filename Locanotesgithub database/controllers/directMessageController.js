const directMessage = require('../models/directMessage');

const directMessage_index = (req, res) => {
    const userId = req.query.userId;
    const recieverId = req.query.recieverId;
    if (userId !== undefined) {
        directMessage.find({ userId: userId }).sort({ createdAt: -1}).then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.send(err);
        })
    } else if (recieverId !== undefined) {
        directMessage.find({ recieverId: recieverId }).sort({ createdAt: -1}).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    } else {
        directMessage.find().sort({createdAt: -1}).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
}

const directMessage_create = (req,res) => {
    const userId = req.query.userId;
    const recieverId = req.query.recieverId;
    const body = req.query.body;

    const model = {
        userId: userId,
        recieverId: recieverId,
        body: body
    }
        const newdirectMessage = new directMessage(model);

        newdirectMessage.save().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });
}

module.exports = {
    directMessage_index,
    directMessage_create,
}