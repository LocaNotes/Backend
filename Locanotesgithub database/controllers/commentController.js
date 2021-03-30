const comment = require('../models/comment');
const { findById } = require('../models/note');
const note = require('../models/note');
const { findById } = require('../models/user');
const user = require('../models/user');


const comment_create_post = (req,res) => {
    const opuserId = req.params.userId
    const comuserId = req.params.userId
    const noteId = req.params.noteId;
    const body = req.query.body;
    
    note.findOne({_id:noteId})
    .then(result => {
        result.comments.push({userId: comuserId}, {body: body});
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