// notes_sd
const note = require('../models/note');
const privacy = require('../models/privacy');

const note_index = (req, res) => {
    const userId = req.query.userId;
    const public = req.query.public;

    if (userId !== undefined) {
        note.find({ userId: userId }).sort({ createdAt: -1}).then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.send(err);
        })
    } else if (public === "true") {
        privacy.aggregate([
            { "$match": { "label": "public" }}
        ]).then(result => {
            // console.log(typeof(result[0]._id));
            // console.log(typeof(String(result[0]._id)));
            // console.log(result[0]._id);
            note.aggregate([
                { "$match": { "privacyId": String(result[0]._id) }}
            ]).then(result => {
                res.send(result);
            }).catch(err => {
                res.send(err);
            })
        }).catch(err => {
            res.send(err);
        })
    } else {
        note.find().sort({ createdAt: -1})
        .then((result)=> {
            //res.render('index',{title: 'All notes',notes: result })
            res.send(result);
        })
        .catch((err)=> {
            console.log(err);
            res.send(err);
        })
    }
}

const note_details = (req, res) => {
    const id = req.params.id;

    note.findById(id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
}

const note_create_get = (req, res) => {
    res.render('create', { title: 'Create a new note' });
}

const note_create_post = (req,res) => {
    const userId = req.query.userId;
    const privacyId = req.query.privacyId;
    const noteTagId = req.query.noteTagId;
    const title = req.query.title;
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const body = req.query.body;
    const isStory = req.query.isStory;
    const downvotes = req.query.downvotes;
    const upvotes = req.query.upvotes;
    const comment = req.query.comment;

    const model = {
        userId: userId, 
        privacyId: privacyId, 
        noteTagId: noteTagId, 
        title: title, 
        latitude: latitude, 
        longitude: longitude,  
        body: body,
        isStory: isStory,  
        downvotes: downvotes, 
        upvotes: upvotes,
        comment: comment
    }

    const newNote = new note(model);

    newNote.save().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
}

const note_create_lat = (req,res) => {
    const newnote = new note(req.latitude);
    newnote.save()
    .then((result) => {
        res.redirect('/notes');
    })
    .catch((err)=> {
        console.log(err);
        res.send(err);
    })
}


const note_create_long = (req,res) => {
    const newnote = new note(req.longitude);
    newnote.save()
    .then((result) => {
        res.redirect('/notes');
    })
    .catch((err)=> {
        console.log(err);
        res.send(err);
    });  
}

const note_edit = (req,res) => {
    const noteId = req.params.id;

    const userId = req.query.userId;
    const privacyId = req.query.privacyId;
    const noteTagId = req.query.noteTagId;
    const title = req.query.title;
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const body = req.query.body;
    const isStory = req.query.isStory;
    const downvotes = req.query.downvotes;
    const upvotes = req.query.upvotes;
    const comment = req.query.comment;

    note.findById(noteId).then(result => {
        result.userId = userId;
        result.privacyId = privacyId; 
        result.noteTagId = noteTagId;
        result.title = title; 
        result.latitude = latitude; 
        result.longitude = longitude; 
        result.body = body; 
        result.isStory = isStory; 
        result.downvotes = downvotes; 
        result.upvotes = upvotes;
        result.comment = comment;

        result.save().then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        });
    }).catch(err => {
        res.send(err);
    });
}

const note_delete = (req, res) => {
    const id = req.params.id;

    note.findByIdAndDelete(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

module.exports = {
    note_index,
    note_details,
    note_create_get,
    note_create_post,
    note_delete,
    note_create_lat,
    note_create_long,
    note_edit
}