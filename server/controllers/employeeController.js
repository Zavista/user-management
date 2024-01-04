const Employee = require('../models/Employee')
const mongoose = require('mongoose')
//GET: Homepage

exports.homepage = async (req, res) =>{
    const locals = {
        title: 'Home',
        description: `CRUD User Management System`
    }
    res.render('index', locals);
}


//GET: New Employee Form

exports.addEmployee = async (req, res) => {
    const locals = {
        title: 'Add New Employee',
        description: `CRUD User Management System`
    }

    res.render('employee/add', locals);
}

//POST: Create New Employee

exports.createEmployee = async (req, res) => {
    console.log(req);
    const locals = {
        title: 'Add New Employee',
        description: `CRUD User Management System`
    }

    res.render('employee/add', locals);
}