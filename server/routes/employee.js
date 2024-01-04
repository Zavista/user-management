const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController')

// Employee Routes

router.get('/', employeeController.homepage)

router.get('/add', employeeController.addEmployee)

router.post('/add', employeeController.createEmployee)

module.exports = router;