// notes_sd
const note = require('../models/note');

const note_index = (req, res) => {
    note.find().sort({ createdAt: -1})
    .then((result)=> {
        res.render('index',{title: 'All notes',notes: result })
    })
    .catch((err)=> {
        console.log(err);
    })
}
const note_details = (req, res) => {
    const id = req.params.id;
    note.findById(id)
        .then(result => {
            res.render('details', { note: result, title: 'note Details'});
        })
        .catch(err => {
            res.status(404).render('404', { title: '404' });
        });
}
const note_create_get = (req,res) => {
    res.render('create', { title: 'Create a new note' });
}
const note_create_post = (req,res) => {
    const newnote = new note(req.body);

    newnote.save()
        .then((result) => {
            res.redirect('/notes');
        })
        .catch((err)=> {
            console.log(err);
        })
}
const note_delete = (req,res) => {
    const id = req.params.id;

    note.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/notes'})
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    note_index,
    note_details,
    note_create_get,
    note_create_post,
    note_delete
}