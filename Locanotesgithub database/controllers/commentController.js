const comment = require('../models/comment');

const comment_index = (req, res) => {
    const userId = req.query.userId;
    const noteId = req.query.noteId;
    if (userId !== undefined) {
        comment.find({ userId: userId }).sort({ createdAt: -1}).then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.send(err);
        })
    } else if (noteId !== undefined) {
        comment.find({ noteId: noteId }).sort({ createdAt: -1}).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    } else {
        comment.find().sort({createdAt: -1}).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
}

const comment_create_post = (req,res) => {
    const userId = req.query.userId
    const noteId = req.query.noteId;
    const body = req.query.body;

    const model = {
        userId: userId,
        noteId: noteId,
        body: body
    }

        const newComment = new comment(model);

        newComment.save().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });
}

const comment_edit = (req,res) => {
    const userId = req.params.id;
    const noteId = req.query.userId;
    const body = req.query.userId;

    note.findById(noteId).then(result => {
        result.userId = userId;
        result.noteId = noteId;
        result.body = body;

        result.save().then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        });
    }).catch(err => {
        res.send(err);
    });
}

module.exports = {
    comment_index,
    comment_create_post,
    comment_edit,

}