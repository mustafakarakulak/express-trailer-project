// User Controller

const User = require('../models/users');

const addUser = async (req, res) => {
    const user = new User({
        us_name: req.body.us_name,
        us_gender: req.body.us_gender,
        us_age: req.body.us_age,
        us_image: req.body.us_image
    });

    if (!user.us_name || !user.us_age || !user.us_gender || !user.us_image) {
        res.status(400).json({ message: 'Lütfen tüm alanları doldurunuz.' });
        return;
    }

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
};

const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({us_id: req.params.id});
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    addUser,
    allUsers,
    getUser
};