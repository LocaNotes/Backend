const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.post('/login', loginController.login);

module.exports = router;