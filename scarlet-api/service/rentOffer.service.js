const RentOffer = require("../model/rentOffer.model");

exports.getAll = async () => {
    try {
        return await RentOffer.find({});
    } catch (e) {
        throw Error('Error fetching rent offers ' + e )
    }
};

exports.getById = async query => {
    try {
        return await RentOffer.findById(query);
    } catch (e) {
        throw Error('Error fetching rent offer ' + e )
    }
};

exports.addRentOffer = async query => {
    try {
        const rentOffer = new RentOffer(query);
        return await rentOffer.save();
    } catch (e) {
        throw Error('Error registering rent offer ' + e )
    }
};
