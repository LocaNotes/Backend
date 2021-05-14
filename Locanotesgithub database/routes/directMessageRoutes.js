const express = require('express');
const directMessageController = require('../controllers/directMessageController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.post('/directMessage', directMessageController.directMessage_create);
router.get('/directMessage', directMessageController.directMessage_index);

module.exports = router;