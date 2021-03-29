const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/user', userController.user_create);

router.post('/user/resetemail/:id', userController.user_reset_email);

router.post('/user/resetpassword/:id', userController.user_reset_password);

router.post('/user/resetusername/:id', userController.user_reset_username);

//router.post('/user/:firstName/:lastName/:email/:username/:password', userController.user_create);

router.get('/user', userController.user_index);

router.delete('/user/:id', userController.user_delete);

module.exports = router;
