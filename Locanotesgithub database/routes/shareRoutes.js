const express = require('express');
const shareController = require('../controllers/shareController');
const router = express.Router();


router.post('/share', shareController.share_post);
router.get('/share', shareController.share_index);

module.exports = router;