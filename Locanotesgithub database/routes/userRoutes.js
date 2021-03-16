const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/user', userController.user_create);

router.post('/user/:firstName/:lastName/:email/:username/:password', userController.user_create);

module.exports = router;
