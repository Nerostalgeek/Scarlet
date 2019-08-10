const User = require('../models/user.model');
const express = require('express');

user = express.Router();

// Route for ALL USERS
user.get('/', (req, res) => {
    User.find(function (err, listUsers) {
        if (err) {
            console.log(err);
        } else {
            res.json(listUsers);
        }
    });
});

// Route for a specific user
user.get('/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        res.json(user);
    })
});

user.route('/add').post(function (req, res) {
    const userInfos = req.body;
    const newUser = new User({
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
        email: userInfos.email,
        role: userInfos.role
    });
    newUser.save()
        .then(user => {
            res.status(200).json({'user': `User ${user.id} added successfully`});
        })
        .catch(err => {
            res.status(400).send('Error adding new user');
        });
});


module.exports = user;
