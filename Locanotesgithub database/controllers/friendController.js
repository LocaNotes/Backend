const friend = require('../models/friend');

const friend_index = (req, res) => {
    friend.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const friend_add = (req,res) => {
    const userId = req.query.userId;
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

const friend_list = async(req,res) => {
    const userId = req.params.userId;
    let friendArray = []; // first array 'one way add'
    await friend.find({userId:userId}).then(result => {
            for(let i = 0; i < result.length; i++)
            {
                friendArray[i] = result[i];
            }
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
        let friendArray2 = []; // second array of actual "friends" i.e. both added
    for(let k = 0; k < friendArray.length; k++)
    {
    await friend.find({userId:friendArray[k].friendUserId}).then(result => {
            for(let o = 0; o < result.length; o++)
            {
                if(result[o].friendUserId === userId){
                    friendArray2.push(friendArray[k]);
                }
            }

        })
    } res.send(friendArray2);

}

const friend_delete = (req, res) => {
    const userId = req.params.id;

    friend.findByIdAndDelete(userId).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}


module.exports = {
    friend_index,
    friend_add,
    friend_list,
    friend_delete,
}