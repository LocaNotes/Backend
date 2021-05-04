const express = require('express');
const shareController = require('../controllers/shareController');
const router = express.Router();


router.post('/share', shareController.share_post);
router.get('/share', shareController.share_index);
router.get('/share/:receiverId',shareController.share_search);
router.get('/share/notes/:receiverId', shareController.share_search_notes);

module.exports = router;