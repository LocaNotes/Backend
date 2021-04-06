const express = require('express');
const friendController = require('../controllers/friendController');
const router = express.Router();

router.post('/friend', friendController.friend_add);
router.get('/friend', friendController.friend_index);


module.exports = router;