const express = require('express');
const reportController = require('../controllers/reportController');
const router = express.Router();
/*
    Routes are how the service creates GET and POST requests
    Inside the routes certain functions have different requests such ad Delete or Patch
*/
router.get('/', reportController.report_index);

router.post('/', reportController.report_create);

router.get('/:id', reportController.report_details);

router.delete('/:id', reportController.report_delete);

module.exports = router;
