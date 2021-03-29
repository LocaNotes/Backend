const express = require('express');
const noteTagController = require('../controllers/noteTagController');
const router = express.Router();

router.get('/', noteTagController.note_tag_index);

router.post('/', noteTagController.note_tag_create);

router.get('/:id', noteTagController.note_tag_details);

router.delete('/:id', noteTagController.note_tag_delete);

module.exports = router;
