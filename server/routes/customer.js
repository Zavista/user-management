const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')

// Customer Routes

router.get('/', customerController.homepage)

module.exports = router;