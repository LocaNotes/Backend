const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.post('/user', userController.user_create);

router.post('/user/forgotpassword', userController.user_forgot_password);

router.post('/user/verifytemporarypassword', userController.user_verify_temporary_password);

router.patch('/user/resetemail/:id', userController.user_reset_email);

router.patch('/user/resetpassword/:id', userController.user_reset_password);

router.patch('/user/resetusername/:id', userController.user_reset_username);

router.patch('/user/updateuserinfo/:id', userController.user_update_info);

//router.post('/user/:firstName/:lastName/:email/:username/:password', userController.user_create);

router.get('/user', userController.user_index);

router.delete('/user/:id', userController.user_delete);

router.patch('/user/updateuserradius/:id', userController.user_update_radius);

module.exports = router;
