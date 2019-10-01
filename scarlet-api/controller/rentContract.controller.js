const RentContractService = require('../service/rentContract.service');

exports.getAll = async (req, res) => {
    try {
        const rentContractList = await RentContractService.getAll();
        return res.status(200).json({
            rentContractList
        })
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const rentContract = await RentContractService.getById(id);
        return res.status(200).json({
            rentContract
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.addRentContract = async (req, res) => {
    const rentContractData = req.body;
    try {
        const rentContract = await RentContractService.addRentContract(rentContractData);
        return res.status(200).json({
            rentContract
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};