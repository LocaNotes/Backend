const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.post('/comment', commentController.comment_create_post);

