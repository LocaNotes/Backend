// const user = require('../models/user');
const mongoUser = require('../models/user');

const user_create = (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const email = req.query.email;
    const username = req.query.username;
    const password = req.query.password; 

    const user = new mongoUser({firstName: firstName, lastName: lastName, email: email, username: username, password: password});

    user.save()
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.send(error);
        })
}

const user_reset_email = (req, res) => {
    const userId = req.params.id;

    const email = req.query.email; 

    mongoUser.findById(userId).then(result => {
        result.email = email;
        result.save().then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }).catch(err => {
        res.send(err);
    })
}

const user_reset_password = (req, res) => {
    const userId = req.params.id;

    const password = req.query.password; 

    mongoUser.findOneAndUpdate({_id: userId}, {password: password}).then(() => {
        mongoUser.findById(userId).then(result => {
            res.send(result);
        })
    }).catch(err => {
        res.send(err);
    })
}

const user_reset_username = (req, res) => {
    const userId = req.params.id;

    const username = req.query.username; 

    mongoUser.findOneAndUpdate({_id: userId}, {username: username}).then(() => {
        mongoUser.findById(userId).then(result => {
            res.send(result);
        })
    }).catch(err => {
        res.send(err);
    })
}

const user_index = (req, res) => {
    mongoUser.find().sort({ createdAt: -1 })
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.send(error);
        })
}

const user_delete = (req,res) => {
    const id = req.params.id;

    mongoUser.findByIdAndDelete(id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    user_create,
    user_reset_email,
    user_reset_password,
    user_reset_username,
    user_index,
    user_delete
}