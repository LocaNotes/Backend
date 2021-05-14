const express = require('express');
const blockUserController = require('../controllers/blockUserController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.post('/block', blockUserController.block_add);
router.get('/block', blockUserController.blocked_index);
router.get('/block/:userId',blockUserController.block_list);
router.delete('block/:userId',blockUserController.block_delete);
module.exports = router;