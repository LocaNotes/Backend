const express = require('express');
const supportMessageController = require('../controllers/supportMessageController');
const router = express.Router();

router.get('/', supportMessageController.support_message_index);

router.post('/', supportMessageController.support_message_create);

router.get('/:id', supportMessageController.support_message_details);

router.delete('/:id'), supportMessageController.support_message_delete);

module.exports = router;