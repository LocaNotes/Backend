const express = require('express');
const downvoteController = require('../controllers/downvoteController');
const router = express.Router();

router.get('/', downvoteController.downvote_index);

router.post('/', downvoteController.downvote_post);

router.delete('/:id', downvoteController.downvote_delete);

module.exports = router;