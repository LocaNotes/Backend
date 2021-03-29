// const user = require('../models/user');
const mongoUser = require('../models/user');
const userForgetPassword = require('../models/userForgetPassword');
const nodemailer = require('nodemailer');

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

const user_forgot_password = (req, res) => {

    const userEmail = req.query.email;

    mongoUser.findOne({email: userEmail}).then(userObject => {
        const userId = userObject._id;

        const temporaryPasswordDocument = new userForgetPassword({userId: userId, tempPassword: userId});

        temporaryPasswordDocument.save().then(result => {
            const senderEmail = 'locanotes0@gmail.com';
            const password = 'Ye-Uk7Zjfhx.pFq';

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com', 
                auth: {
                    user: senderEmail, 
                    pass: password
                }
            });

            const temporaryPassword = result.tempPassword;
            const body = 
                '<div style="color: red; text-align: center;">' + 
                    '<h1>Hey there, ' + userEmail + '.</h1>' +
                    '<p>Here is your temporary password: <b>' + temporaryPassword + '</b>.</p>' + 
                    '<p>Yours in heart,<br>'+ senderEmail +'</p>' +
                '</div>';

            const mailOptions = {
                from: senderEmail,
                to: userEmail,
                subject: 'Locanotes Temporary Password',
                html: body
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                    res.send(error);
                } else {
                    console.log(userObject);
                    res.send(userObject);
                }
            });
        }).catch(err => {
            res.send(err);
        });
    }).catch(err => {
        res.send(err);
    });   
}

const user_verify_temporary_password = (req, res) => {
    const email = req.query.email;
    const temporaryPassword = req.query.temporaryPassword;

    mongoUser.findOne({email: email}).then(userResult => {
        const userId = userResult._id;

        userForgetPassword.findOne({userId: userId}).then(result => {
            if (result.tempPassword === temporaryPassword) {
                res.send(userResult);
            }
        }).catch(err => {
            res.send(err);
        });
    }).catch(err => {
        res.send(err);
    });
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
    user_forgot_password,
    user_verify_temporary_password,
    user_reset_email,
    user_reset_password,
    user_reset_username,
    user_index,
    user_delete
}