// const blockUser = require('../models/blockUser');
const blockUser = require('../models/blockUser');
const { findById } = require('../models/user');
const user = require('../models/user');

const blockUser_create_block = (req,res) => {
    const userId = req.params.userId
    const blockedUserId = req.params.userId

    
    note.findOne({_id:blockedUserId})
    .then(result => {
       
    })
    .catch(error => {
        res.send(error);
    })
    
}
