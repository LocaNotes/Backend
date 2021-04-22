const express = require('express');
const reportController = require('../controllers/reportController');
const router = express.Router();

router.get('/', reportController.report_index);

router.post('/', reportController.report_create);

router.get('/:id', reportController.report_details);

router.delete('/:id', reportController.report_delete);

module.exports = router;
