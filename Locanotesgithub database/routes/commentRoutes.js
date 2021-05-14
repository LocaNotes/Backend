const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.post('/comment', commentController.comment_create_post);
router.get('/comment', commentController.comment_index);
router.patch('/comment/:id', commentController.comment_edit);


module.exports = router;