const supportMessage = require('../models/supportMessage');
/*
    A Controller is basically the "guts" of the program this is where index is formed which all controllers have
    As well as create functionalities and other functionalities specific for them.
*/
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