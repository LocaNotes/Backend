const express = require('express');
const noteTagController = require('../controllers/noteTagController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.get('/', noteTagController.note_tag_index);

router.post('/', noteTagController.note_tag_create);

router.get('/:id', noteTagController.note_tag_details);

router.delete('/:id', noteTagController.note_tag_delete);

module.exports = router;
