// const user = require('../models/user');
const mongoUser = require('../models/user');
const userForgetPassword = require('../models/userForgetPassword');
const nodemailer = require('nodemailer');

const user_create = async (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const email = req.query.email;
    const username = req.query.username;
    const password = req.query.password;
    const bio = req.query.bio

    let emailIsTaken = false;
    let usernameIsTaken = false;

    await mongoUser.find({ email: email }).then(result => {
        if (result.length > 0) {
            emailIsTaken = true;
        }
    }).catch(err => {
        console.log('error checking if email was taken');
        emailIsTaken = true;
    })

    await mongoUser.find({ username: username }).then(result => {
        if (result.length > 0) {
            usernameIsTaken = true;
        }
    }).catch(err => {
        console.log('error checking if username was taken');
        usernameIsTaken = true;
    })

    if (emailIsTaken) {
        const response = JSON.stringify({email: 'taken'});
        res.send(response);
    } else if (usernameIsTaken) {
        const response = JSON.stringify({username: 'taken'});
        res.send(response);
    } else {
        const user = new mongoUser({
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            username: username, 
            password: password, 
            bio: bio,
            radius: 50
        });

        user.save().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        })
    }
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

const user_reset_email = async (req, res) => {
    const userId = req.params.id;

    const email = req.query.email; 

    let emailIsTaken = false;

    await mongoUser.find({ email: email }).then(result => {
        if (result.length > 0) {
            emailIsTaken = true;
        }
    }).catch(err => {
        console.log('error checking if email was taken');
        emailIsTaken = true;
    })

    if (emailIsTaken) {
        const response = JSON.stringify({email: 'taken'});
        res.send(response);
    } else {
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

const user_reset_username = async (req, res) => {
    const userId = req.params.id;

    const username = req.query.username; 

    let usernameIsTaken = false;

    await mongoUser.find({ username: username }).then(result => {
        if (result.length > 0) {
            usernameIsTaken = true;
        }
    }).catch(err => {
        console.log('error checking if email was taken');
        usernameIsTaken = true;
    })

    if (usernameIsTaken) {
        const response = JSON.stringify({username: 'taken'});
        res.send(response);
    } else {
        mongoUser.findOneAndUpdate({_id: userId}, {username: username}).then(() => {
            mongoUser.findById(userId).then(result => {
                res.send(result);
            })
        }).catch(err => {
            res.send(err);
        })
    }
}

const user_update_info = (req,res) => {
    const userId = req.params.id;

    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const bio = req.query.bio;

    mongoUser.findByIdAndUpdate({_id: userId}, {firstName: firstName, lastName: lastName, bio:bio}).then(() =>{
        mongoUser.findById(userId).then(result => {
            res.send(result);
        })
    }).catch(err => {
        res.send(err);
    })
}

const user_index = (req, res) => {
    const userId = req.query.userId; 
    const username = req.query.username;
    if (userId !== undefined) {
        mongoUser.find({ _id: userId }).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    } else if (username !== undefined) {
        mongoUser.find({ username: username }).then(result => {
            if (result.length == 0) {
                console.log('yo');
            }
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    } else {
        mongoUser.find().sort({ createdAt: -1 }).then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        })
    }
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

const user_update_radius = (req, res) => {
    const userId = req.params.id;
    const radius = req.query.radius;

    mongoUser.findByIdAndUpdate(userId, {radius: radius}).then(_ => {
        mongoUser.findById(userId).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }).catch(err => {
        res.send(err);
    })
}

module.exports = {
    user_create,
    user_forgot_password,
    user_verify_temporary_password,
    user_reset_email,
    user_reset_password,
    user_reset_username,
    user_update_info,
    user_index,
    user_delete,
    user_update_radius
}