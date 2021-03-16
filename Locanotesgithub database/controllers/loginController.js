const user = require('../models/user');

const login = (req, res) => {
    const username = req.params.username;
    const password = req.params.password; 
    user.find({ username: username, password: password })
        .then((result) => {
            res.send(result);
        })
        .catch(error => {
            res.send(error);
        })
}

module.exports = {
    login
}