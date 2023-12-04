//User Routes

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Kullanıcı ekleme endpoint'i
router.post('/adduser', userController.addUser);

//Tüm kullanıcıları getiren endpoint
router.get('/alluser', userController.allUsers);

//Tek kullanıcı getiren endpoint
router.get('/user/:id', userController.getUser);

module.exports = router;
