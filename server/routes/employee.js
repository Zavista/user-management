const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController')

// Customer Routes

router.get('/', employeeController.homepage)

router.get('/add', employeeController.addCustomer)
module.exports = router;