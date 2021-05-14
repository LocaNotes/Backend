const upvote = require('../models/upvote');
/*
    A Controller is basically the "guts" of the program this is where index is formed which all controllers have
    As well as create functionalities and other functionalities specific for them.
*/
const upvote_index = (req, res) => {
    upvote.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const upvote_post = (req, res) => {
    const userId = req.query.userId;
    const noteId = req.query.noteId;

    const model = {
        userId: userId,
        noteId: noteId
    }
    const newUpvote = new upvote(model);

    newUpvote.save().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
}

const upvote_delete = (req, res) => {
    const id = req.params.id;

    upvote.findByIdAndDelete(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

module.exports = {
    upvote_index, 
    upvote_post,
    upvote_delete
}