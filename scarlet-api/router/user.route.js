const User = require('../model/user.model');
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
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

user.route('/login').post(async function (req, res) {
    const { password, email } = req.body;
    if (!email || !password) {
      //Le cas où l'email ou bien le password ne serait pas soumit ou nul
      return res.status(400).json({
        text: "Invalid request"
      });
    console.log('req body ->', req.body);

    }
    try {
      // On check si l'utilisateur existe en base
      const findUser = await User.findOne({ email });
      if (!findUser)
        return res.status(401).json({
          text: "The User doesn't exist"
        });
      if (!findUser.methods.comparePassword(password))
        return res.status(401).json({
          text: "User or password doesn't match"
        });
      return res.status(200).json({
        token: findUser.getToken(),
        text: "Authentication successfull"
      });
    } catch (error) {
      return res.status(500).json({
        error
      });
    }
  })



module.exports = user;