// const user = require('../models/user');
const mongoUser = require('../models/user');

const user_create = (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const email = req.query.email;
    const username = req.query.username;
    const password = req.query.password; 

    const user = new mongoUser({firstName: firstName, lastName: lastName, email: email, username: username, password: password});

    console.log('body:');
    console.log(req.body);
    user.save()
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.send(error);
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

module.exports = {
    user_create,
    user_index
}