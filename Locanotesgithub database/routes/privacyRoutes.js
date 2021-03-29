const express = require('express');
const privacyController = require('../controllers/privacyController');
const router = express.Router();

router.get('/', privacyController.privacy_index);

router.post('/', privacyController.privacy_create);

router.get('/:id', privacyController.privacy_details);

router.delete('/:id', privacyController.privacy_delete);

module.exports = router;
