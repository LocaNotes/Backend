const express = require('express');
const supportMessageController = require('../controllers/supportMessageController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.post('/supportMessage', supportMessageController.createSupportMessage);
router.get('/supportMessage', supportMessageController.supportMessage_index);

module.exports = router;