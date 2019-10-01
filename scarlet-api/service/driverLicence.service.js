const DriverLicence = require("../model/driverLicence.model");

exports.getAll = async () => {
    try {
        return await DriverLicence.find({});
    } catch (e) {
        throw Error('Error fetching driver licences ' + e )
    }
};

exports.getById = async query => {
    try {
        return await DriverLicence.findById(query);
    } catch (e) {
        throw Error('Error fetching driver licence ' + e )
    }
};

exports.addDriverLicence = async query => {
    try {
        const driverLicence = new DriverLicence(query);
        return await driverLicence.save();
    } catch (e) {
        throw Error('Error registering driver licence ' + e )
    }
};
