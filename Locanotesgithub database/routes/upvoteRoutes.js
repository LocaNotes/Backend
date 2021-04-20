const express = require('express');
const upvoteController = require('../controllers/upvoteController');
const router = express.Router();

router.get('/', upvoteController.upvote_index);

router.post('/', upvoteController.upvote_post);

router.delete('/:id', upvoteController.upvote_delete);

module.exports = router;