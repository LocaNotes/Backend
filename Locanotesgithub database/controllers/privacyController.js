const privacy = require('../models/privacy.js');

const privacy_index = (req, res) => {
    privacy.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const privacy_details = (req, res) => {
    const id = req.params.id;
    
    privacy.findById(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

const privacy_create = (req, res) => {
    const label = req.query.label; 

    const newPrivacy = new privacy({label: label});

    newPrivacy.save().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
}

const privacy_delete = (req, res) => {
    const id = req.params.id;

    privacy.findByIdAndDelete(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

module.exports = {
    privacy_index,
    privacy_details,
    privacy_create,
    privacy_delete,
}