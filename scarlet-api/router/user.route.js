const UserModel = require('../models/user.model');

const mongoose = require("mongoose");

const express = require('express'),
    userRoute = express.Router();


    // USER ROUTER

    // Route for ALL USERS
    userRoute.get('/', (req, res) => {
        UserModel.find(function(err, listUsers) {
            if (err) {
                console.log(err);
            } else {
                res.json(listUsers);
            }
        });
    });

    // Route for a specific user
    userRoute.get('/:id', (req, res) => {
        let id = req.params.id;
        UserModel.findById(id, (err, user) => {
            res.json(user);
        })
    });
    
     userRoute.route('/add').post(function(req, res) {
            let userInfos = req.body;
            console.log(userInfos);
            let newUser = new UserModel({
                firstName: userInfos.firstName,
                lastName: userInfos.lastName,
                email: userInfos.email,
                role: userInfos.role
            });
            newUser.save()
                .then(user => {
                    console.log('user => => =>', user);
                    res.status(200).json({'user': `User ${user.id} added successfully`});
                })
                .catch(err => {
                    res.status(400).send('Error adding new user');
                    console.log('err => =>', err);
                });
        });

module.exports = userRoute;