const noteTag = require('../models/noteTag.js');
/*
    A Controller is basically the "guts" of the program this is where index is formed which all controllers have
    As well as create functionalities and other functionalities specific for them.
*/
const note_tag_index = (req, res) => {
    noteTag.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const note_tag_details = (req, res) => {
    const id = req.params.id;
    noteTag.findById(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

const note_tag_create = (req, res) => {
    const label = req.query.label; 

    const newNoteTag = new noteTag({label: label});

    newNoteTag.save().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
}

const note_tag_delete = (req, res) => {
    const id = req.params.id;

    noteTag.findByIdAndDelete(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

module.exports = {
    note_tag_index,
    note_tag_details,
    note_tag_create,
    note_tag_delete,
}