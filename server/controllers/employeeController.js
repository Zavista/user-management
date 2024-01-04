const Employee = require('../models/Employee')
const mongoose = require('mongoose')
//GET: Homepage

exports.homepage = async (req, res) =>{

    const messages = await req.flash("info");

    const locals = {
        title: 'Home',
        description: `CRUD User Management System`
    }

    try {
        const employees = await Employee.find({}).limit(22)
        res.render('index', { locals, messages, employees } );
    } catch (err) {
        console.log(err);
    }


    
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
    const locals = {
        title: 'Add New Employee',
        description: `CRUD User Management System`
    }

    const newEmployee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        job: req.body.job,
        eid: req.body.eid,
        aif: req.body.aif
    });

    try {
        await newEmployee.save();
        await req.flash('info', 'New employee has been added.')
        res.redirect('/')
    } catch(err){
        console.log(err)
    }
}