
//GET: Homepage

exports.homepage = async (req, res) =>{
    const locals = {
        title: 'Home',
        description: `CRUD User Management System`
    }
    res.render('index', locals);
}


//GET: New Customer Form

exports.addCustomer = async (req, res) => {
    const locals = {
        title: 'Add New Employee',
        description: `CRUD User Management System`
    }

    res.render('employee/add', locals);
}