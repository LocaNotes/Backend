const express = require('express');
const downvoteController = require('../controllers/downvoteController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.get('/', downvoteController.downvote_index);

router.post('/', downvoteController.downvote_post);

router.delete('/:id', downvoteController.downvote_delete);

module.exports = router;