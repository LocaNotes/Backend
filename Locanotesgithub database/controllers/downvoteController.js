const downvote = require('../models/downvote');
/*
    A Controller is basically the "guts" of the program this is where index is formed which all controllers have
    As well as create functionalities and other functionalities specific for them.
*/
const downvote_index = (req, res) => {
    downvote.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const downvote_post = (req, res) => {
    const userId = req.query.userId;
    const noteId = req.query.noteId;

    const model = {
        userId: userId,
        noteId: noteId
    }
    const newdownvote = new downvote(model);

    newdownvote.save().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
}

const downvote_delete = (req, res) => {
    const id = req.params.id;

    downvote.findByIdAndDelete(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

module.exports = {
    downvote_index, 
    downvote_post,
    downvote_delete
}