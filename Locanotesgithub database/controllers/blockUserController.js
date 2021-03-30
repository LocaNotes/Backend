const blockUser = require('../models/blockUser');
const { findById } = require('../models/user');
const user = require('../models/user');
const bool = 0;

const blockUser_create_block = (req,res) => {
    const blockedUserId = req.params.userId
    
    user.findById({_id:blockedUserId})
    if(bool == 1){
        result.blockedUserId = bool
        result.save().then(result => {
            res.send(result)
        }).catch(error => {
            res.send(error);
        });
    
    }  
}
