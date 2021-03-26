const comment = require('../models/comment');
const { findById } = require('../models/user');
const user = require('../models/user');


const note_create_post = (req,res) => {
    const userId = req.params.userId;
    const title = req.params.title;
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;
    const body = req.params.body;
    
    user.findOne({_id:userId})
    .then(result => {
        result.notes.push({title: title, latitude: latitude, longitude: longitude,  body: body});
        result.save();
        res.send(result);
    })
    .catch(error => {
        res.send(error);
    })
    
}