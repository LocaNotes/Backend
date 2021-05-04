const friend = require('../models/friend');
const user = require('../models/user');

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

/**
 * Sends to the client a list of friend documents where userId is the friender.
 * Two users are friends iff there is a friend document where user A is the 
 * friender and user B is the friendee, and another where user B is the friender 
 * and user A is the friendee.
 * @param {*} req 
 * @param {*} res 
 */
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

        }).catch(err => {
            res.send(err);
        })
    } res.send(friendArray2);
}

/**
 * Same as friend_list, except sends the actual user json, not the friend documents. 
 * @param {*} req 
 * @param {*} res 
 */
const friend_list_users = async (req, res) => {
    const userId = req.params.userId;

    // first array 'one way add'
    let friendsAdded = []; 
    await friend.find({ userId: userId }).then(result => {
        for (let i = 0; i < result.length; i++) {
            friendsAdded[i] = result[i];
        }
    }).catch(err => {
        res.send(err);
    });

    // second array of actual "friends" i.e. both added
    let trueFriends = []; 
    for (let i = 0; i < friendsAdded.length; i++) {
        await friend.find({ userId: friendsAdded[i].friendUserId }).then(result => {
            for (let j = 0; j < result.length; j++) {
                if (result[j].friendUserId === userId) {
                    trueFriends.push(friendsAdded[i]);
                }
            }
        }).catch(err => {
            res.send(err);
        });
    } 

    // get the actual user documents
    let friends = [];
    for (let i = 0; i < trueFriends.length; i++) {
        const friendeeId = trueFriends[i].friendUserId;
        await user.find({ _id: friendeeId }).then(result => {
            if (result.length > 0) {
                const friend = result[0];
                friends.push(friend);
            }
        }).catch(err => {
            res.send(err);
        })
    }

    res.send(friends);
}

const friend_delete = (req, res) => {
    const frienderId = req.params.frienderId;
    const friendeeId = req.params.friendeeId;

    friend.findOneAndDelete({ userId: frienderId, friendUserId: friendeeId }).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const friend_check = (req, res) => {
    const frienderId = req.params.frienderId;
    const friendeeId = req.params.friendeeId; 

    friend.find({ userId: frienderId, friendUserId: friendeeId }).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}


module.exports = {
    friend_index,
    friend_add,
    friend_list,
    friend_list_users,
    friend_delete,
    friend_check
}