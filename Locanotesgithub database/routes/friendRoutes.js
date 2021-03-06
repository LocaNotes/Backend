const express = require('express');
const friendController = require('../controllers/friendController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.post('/friend', friendController.friend_add);
router.get('/friend', friendController.friend_index);
router.get('/friend/:userId', friendController.friend_list);
router.get('/friend/users/:userId', friendController.friend_list_users);
router.delete('/friend/:frienderId/:friendeeId', friendController.friend_delete);
router.get('/friend/:frienderId/:friendeeId', friendController.friend_check);

module.exports = router;