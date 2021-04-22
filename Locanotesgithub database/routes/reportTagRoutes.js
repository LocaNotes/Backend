const express = require('express');
const reportTagController = require('../controllers/reportTagController');
const router = express.Router();

router.get('/', reportTagController.report_tag_index);

router.post('/', reportTagController.report_tag_create);

router.get('/:id', reportTagController.report_tag_details);

router.delete('/:id', reportTagController.report_tag_delete);

module.exports = router;
