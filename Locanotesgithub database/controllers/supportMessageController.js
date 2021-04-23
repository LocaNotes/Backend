const supportMessage = require('../models/supportMessage');

const supportMessage_index = (req, res) => {
    supportMessage.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}


const createSupportMessage = (req,res) => {
    const ticket = req.query.ticket
    const userId = req.query.userId;
    const message = req.query.message;

    const model = {
        ticket: ticket,
        userId: userId,
        message: message
    }

        const newSupportMessage = new supportMessage(model);

        newSupportMessage.save().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });
}

module.exports = {
    supportMessage_index,
    createSupportMessage,
    
}