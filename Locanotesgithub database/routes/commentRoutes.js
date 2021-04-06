const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.post('/comment', commentController.comment_create_post);
router.get('/comment', commentController.comment_index);
router.patch('/comment/:id', commentController.comment_edit);


module.exports = router;