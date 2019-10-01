const RentContract = require("../model/rentContract.model");

exports.getAll = async () => {
    try {
        return await RentContract.find({});
    } catch (e) {
        throw Error('Error fetching rent contracts ' + e )
    }
};

exports.getById = async query => {
    try {
        return await RentContract.findById(query);
    } catch (e) {
        throw Error('Error fetching rent contract ' + e )
    }
};

exports.addRentContract = async query => {
    try {
        const rentContract = new RentContract(query);
        return await rentContract.save();
    } catch (e) {
        throw Error('Error registering rent contract ' + e )
    }
};
