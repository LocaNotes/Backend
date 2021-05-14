const blockUser = require('../models/blockUser');
const user = require('../models/user');
/*
    A Controller is basically the "guts" of the program this is where index is formed which all controllers have
    As well as create functionalities and other functionalities specific for them.
*/
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

const block_list = async(req,res) => {
    const userId = req.params.userId;
    let blockArray = []; // first array 'one way add'
    await blockUser.find({userId:userId}).then(result => {
            for(let i = 0; i < result.length; i++)
            {
                blockArray[i] = result[i];
            }
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
        let blockArray2 = []; // second array of actual blocks i.e. both added
    for(let k = 0; k < blockArray.length; k++)
    {
    await blockUser.find({userId:blockArray[k].BlockedUserId}).then(result => {
            for(let o = 0; o < result.length; o++)
            {
                if(result[o].BlockedUserId === userId){
                    blockArray2.push(blockArray[k]);
                }
            }

        })
    } res.send(blockArray2);

}

const block_delete = (req, res) => {
    const userId = req.params.id;

    blockUser.findByIdAndDelete(userId).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}


module.exports = {
    blocked_index,
    block_add,
    block_list,
    block_delete,
}
