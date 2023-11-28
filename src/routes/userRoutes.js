//User Routes

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/addus', userController.addUser);

module.exports = router;
