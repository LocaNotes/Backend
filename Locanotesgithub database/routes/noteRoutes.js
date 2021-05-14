const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such as Delete or Patch
*/
router.get('/notes', noteController.note_index);

router.post('/notes', noteController.note_create_post);

router.get('/notes/create', noteController.note_create_get);

router.get('/notes/create', noteController.note_create_lat);

router.get('/notes/:id', noteController.note_details);

router.delete('/notes/:id', noteController.note_delete);

router.patch('/notes/:id', noteController.note_edit);

module.exports = router;
