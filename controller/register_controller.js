const UserModel = require('../model/user_model');

const register = async (req, res) => {
    try {
        const {name, last_name, phone_number}= req.body;
        
        if (!(name && last_name && phone_number)) {
            res.json({
                "status" : false,
                "message" : "All inputs are required"
            });
        }
    } catch (error) {
        
    }
}

module.exports = register;