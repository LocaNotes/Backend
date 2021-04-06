const comment = require('../models/comment');

const comment_index = (req, res) => {
    comment.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const comment_create_post = (req,res) => {
    const comuserId = req.query.userId
    const noteId = req.query.noteId;
    const body = req.query.body;
    
    note.findById(noteId).then(result => {
        result.comment.push({userId: comuserId}, {body: body});
        result.save();
        res.send(result);
    })
    .catch(error => {
        res.send(error);
    })
    
}

module.exports = {
    comment_create_post,

}