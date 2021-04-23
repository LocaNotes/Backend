const directMessage = require('..models/directMessage');
const user = require('..models/user');

const direct_index = (req, res) => {
    directMessage.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err =>{
        res.send(err);
    })
}


const direct_add = (req, res) => {
    const userId = req.query.userId;
    const recieverId = req.query.recieverId;
    const message 
}