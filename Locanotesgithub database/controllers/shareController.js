const share = require('../models/share');

const share_index = (req,res) => {
    share.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const share_post = (req,res) => {
    const noteId = req.query.noteId;
    const recieverId = req.query.recieverId;

    const model = {
        noteId: noteId,
        recieverId: recieverId
    }
        const newShare = new share(model);

        newShare.save().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });
}

module.exports = {
    share_index,
    share_post,

}