const express = require('express');
const directMessageController = require('../controllers/directMessageController');
const router = express.Router();

router.post('/directMessage', directMessageController.directMessage_create);
router.get('/directMessage', directMessageController.directMessage_index);

module.exports = router;