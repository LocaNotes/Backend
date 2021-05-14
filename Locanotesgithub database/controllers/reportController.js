const report = require('../models/report.js');
/*
    A Controller is basically the "guts" of the program this is where index is formed which all controllers have
    As well as create functionalities and other functionalities specific for them.
*/
const report_index = (req, res) => {
    report.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const report_details = (req, res) => {
    const id = req.params.id;
    report.findById(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

const report_create = (req, res) => {
    const noteId = req.query.noteId;
    const userId = req.query.userId;
    const reportTagId = req.query.reportTagId; 

    const newReport = new report({
        noteId: noteId,
        userId: userId, 
        reportTagId: reportTagId
    });

    newReport.save().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
}

const report_delete = (req, res) => {
    const id = req.params.id;

    report.findByIdAndDelete(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

module.exports = {
    report_index,
    report_details,
    report_create,
    report_delete,
}