const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

let User = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
    },
    role: {
      type: String
    }
})

module.exports = mongoose.model("User", User);