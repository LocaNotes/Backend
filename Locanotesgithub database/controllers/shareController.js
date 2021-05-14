const share = require('../models/share');
const note = require('../models/note');
/*
    A Controller is basically the "guts" of the program this is where index is formed which all controllers have
    As well as create functionalities and other functionalities specific for them.
*/
const share_index = (req,res) => {
    const noteId = req.query.noteId;
    const receiverId = req.query.receiverId;

    if (noteId !== undefined && receiverId !== undefined) {
        share.find({ noteId: noteId, receiverId: receiverId }).sort({ createdAt: -1 }).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(result);
        })
    } else {
        share.find().sort({createdAt: -1}).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
}

const share_post = (req,res) => {
    const noteId = req.query.noteId;
    const receiverId = req.query.receiverId;

    const model = {
        noteId: noteId,
        receiverId: receiverId
    }
        const newShare = new share(model);

        newShare.save().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });
}

const share_search = (req,res) => {
    const receiverId = req.params.receiverId
        share.find({receiverId:receiverId}).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
}

const share_search_notes = async (req, res) => {
    const receiverId = req.params.receiverId;
    
    let shares = [];
    await share.find({ receiverId: receiverId }).then(result => {
        shares = result;
    }).catch(err => {
        res.send(err);
    })

    let notes = [];
    for (let i = 0; i < shares.length; i++) {
        await note.findById(shares[i].noteId).then(result => {
            notes.push(result);
        }).catch(err => {
            res.send(err);
        })
    }

    res.send(notes);
}

module.exports = {
    share_index,
    share_post,
    share_search,
    share_search_notes
}