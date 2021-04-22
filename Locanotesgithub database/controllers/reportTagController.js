const reportTag = require('../models/reportTag.js');

const report_tag_index = (req, res) => {
    reportTag.find().sort({createdAt: -1}).then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    })
}

const report_tag_details = (req, res) => {
    const id = req.params.id;
    reportTag.findById(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

const report_tag_create = (req, res) => {
    const label = req.query.label; 

    const newReportTag = new reportTag({label: label});

    newReportTag.save().then(result => {
        res.send(result);
    }).catch(error => {
        res.send(error);
    });
}

const report_tag_delete = (req, res) => {
    const id = req.params.id;

    reportTag.findByIdAndDelete(id).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
}

module.exports = {
    report_tag_index,
    report_tag_details,
    report_tag_create,
    report_tag_delete,
}