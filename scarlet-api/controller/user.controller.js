const UserService = require('../service/user.services');


exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserService.getById(id);
        return res.status(200).json({
                firstName: user.firstName,
                lastName: user.lastName
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.register = async (req, res) => {
    const userData = req.body;
    try {
        const user = await UserService.register(userData);
        return res.status(200).json({
            user
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};
