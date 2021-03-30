const express = require('express');
const blockUserController = require('../controllers/blockUserController');
const router = express.Router();

router.get('/blockUser', blockUserController.blockUser_create_block);