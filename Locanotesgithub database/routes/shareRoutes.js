const express = require('express');
const shareController = require('../controllers/shareController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.post('/share', shareController.share_post);
router.get('/share', shareController.share_index);
router.get('/share/:receiverId',shareController.share_search);
router.get('/share/notes/:receiverId', shareController.share_search_notes);

module.exports = router;