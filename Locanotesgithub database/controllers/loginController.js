const user = require('../models/user');

const login = (req, res) => {
    const username = req.query.username;
    const password = req.query.password; 
    user.find({ username: username, password: password })
        .then((result) => {
            if (!result || result.length == 0) {
                res.status(400).json({error: "user not found"}).send();
            } else {
                res.send(result);
            }
        })
        .catch(error => {
            res.status(400).json({error: error.toString()}).send();
        })
}

module.exports = {
    login
}