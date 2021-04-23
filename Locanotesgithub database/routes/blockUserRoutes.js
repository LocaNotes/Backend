const express = require('express');
const blockUserController = require('../controllers/blockUserController');
const router = express.Router();

router.post('/block', blockUserController.block_add);
router.get('/block', blockUserController.blocked_index);

module.exports = router;