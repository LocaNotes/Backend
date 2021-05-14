const express = require('express');
const privacyController = require('../controllers/privacyController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.get('/', privacyController.privacy_index);

router.post('/', privacyController.privacy_create);

router.get('/:id', privacyController.privacy_details);

router.delete('/:id', privacyController.privacy_delete);

module.exports = router;
