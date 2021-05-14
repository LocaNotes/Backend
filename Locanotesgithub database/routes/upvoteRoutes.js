const express = require('express');
const upvoteController = require('../controllers/upvoteController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.get('/', upvoteController.upvote_index);

router.post('/', upvoteController.upvote_post);

router.delete('/:id', upvoteController.upvote_delete);

module.exports = router;