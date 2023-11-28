// User Controller

const User = require('../models/users');

const addUser = async (req, res) => {
    const user = new User({
        us_name: req.body.us_name,
        us_gender: req.body.us_gender,
        us_age: req.body.us_age,
    });

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    addUser
};