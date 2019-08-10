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

user.route('/register').post(async function (req, res) {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result)
        .then(user => {
            res.status(200).json({'user': `User ${user.id} added successfully`});
        })
        .catch(err => {
            res.status(500).send(err);
        });
});


module.exports = user;
