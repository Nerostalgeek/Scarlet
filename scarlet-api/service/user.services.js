const User = require("../model/user.model");

exports.getById = async query => {
    try {
        return await User.findById(query);
    } catch (e) {
        throw Error('Error fetching user ' + e )
    }
};

exports.register = async query => {
    try {
        const user = new User(query);
        return await user.save();
    } catch (err) {
        throw Error('Error registering user ' + e )
    }
};