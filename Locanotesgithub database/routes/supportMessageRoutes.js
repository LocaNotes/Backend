const express = require('express');
const supportMessageController = require('../controllers/supportMessageController');
const router = express.Router();

router.post('/supportMessage', supportMessageController.createSupportMessage);
router.get('/supportMessage', supportMessageController.supportMessage_index);

module.exports = router;