const Employee = require('../models/Employee')
const mongoose = require('mongoose')


//GET: Homepage

exports.homepage = async (req, res) =>{

    const messages = await req.flash("info");

    const locals = {
        title: 'Home',
        description: `CRUD User Management System`
    }

    let perPage = 10;
    let page = req.query.page || 1;

    try {
        const employees = await Employee.aggregate([
            { $sort: { updatedAt: -1 } },
            { $skip: perPage * page - perPage },
            { $limit: perPage }
        ]).exec();


        const count = await Employee.countDocuments();
        if (page > Math.ceil(count / perPage)) {
            res.render('404');
        }
        else{
          res.render('index', { locals, 
            messages, 
            employees, 
            current: page,
            pages: Math.ceil(count / perPage)
        } );  
        }
        
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

// GET: Get Employee Data
exports.getEmployee = async (req, res) => {
    const locals = {
        title: 'View',
        description: `CRUD User Management System`
    }

    try {
        const employee = await Employee.findOne({_id: req.params.id})

        res.render('employee/view', {locals, employee})
    } catch (err) {
        console.log(err);
    }
}

// GET: Get Edit Employee Form
exports.editEmployee = async (req, res) => {
    const locals = {
        title: 'Edit',
        description: `CRUD User Management System`
    }

    try {
        const employee = await Employee.findOne({_id: req.params.id})

        res.render('employee/edit', {locals, employee})
    } catch (err) {
        console.log(err);
    }
}


// PUT: Update Employee Data
exports.editSubmit = async (req, res) => {
    const locals = {
        title: 'Edit',
        description: `CRUD User Management System`
    }

    try {
        await Employee.findByIdAndUpdate(req.params.id, 
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            job: req.body.job,
            eid: req.body.eid,
            aif: req.body.aif,
            updatedAt: Date.now()
        })

        res.redirect(`/view/${req.params.id}`)
    } catch (err) {
        console.log(err);
    }
}

//DELETE: Delete Employee
exports.deleteEmployee = async (req, res) => {
    try{
        await Employee.deleteOne({_id: req.params.id});
        await req.flash('info', 'Employee has been deleted.')
        res.redirect("/")
    } catch (err) {
        console.log(err);
    }
}

//GET: Search Employee
exports.search = async (req, res) => {
    const locals = {
        title: 'Search',
        description: 'CRUD User Management System'
    };

    try {
        const searchTerm = req.body.searchTerm || " ";
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
        const searchResults = await Employee.find({
            $or: [
                { firstName: {$regex: new RegExp(searchNoSpecialChar, "i")}},
                { lastName: {$regex: new RegExp(searchNoSpecialChar, "i")}},
                { job: {$regex: new RegExp(searchNoSpecialChar, "i")}}]}).limit(10);
        res.render("search", { searchTerm, searchResults, locals }); // Pass searchResults to the view
        
    } catch (err) {
        console.error(err);
    }
};