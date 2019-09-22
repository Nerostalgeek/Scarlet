const User = require("../model/user.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../../config.default");

const jwtSecret = config.jwtSecret;

user = express.Router();

//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
};

// Route for ALL USERS
user.get("/", (req, res) => {
    User.find(function (err, listUsers) {
        if (err) {
            console.log(err);
        } else {
            res.json(listUsers);
        }
    });
});

// Route for a specific user
user.get("/:id", checkToken, (req, res) => {
    //verify the JWT token generated for the user
    jwt.verify(req.token, config.jwtSecret, (err, authorizedData) => {
        if (err) {
            //If error send Forbidden (403)
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            let id = req.params.id;
            User.findById(id, () => {
                res.json({
                    authorizedData
                });
            });
            console.log('SUCCESS: Connected to protected route');
        }
    })
});


user.route("/register").post(async function (req, res) {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

user.route("/login").post(async (req, res) => {
    const email = await req.body.email;
    const password = await req.body.password;
    User.findOne({email})
        .then(user => {
            bcrypt
                .compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user._id,
                            lastName: user.lastName,
                            firstName: user.firstName
                        };
                        jwt.sign(payload, jwtSecret, {expiresIn: 36000}, (err, token) => {
                            if (err)
                                res.status(500).json({
                                    error: "Error signing token",
                                    raw: err
                                });
                            res.json({
                                success: true,
                                token: `Bearer ${token}`,
                                id: user._id
                            });
                        });
                    } else {
                        throw new Error("Invalid credentials");
                    }
                })
                .catch(err => {
                    err = "Email or password is incorrect";
                    return res.status(400).json(err);
                });
        })
        .catch(errors => {
            errors.email = "No Account Found";
            return res.status(404).json(errors);
        });
});

module.exports = user;
