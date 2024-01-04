
//Create Homepage

exports.homepage = async (req, res) =>{
    const locals = {
        title: 'NodeJS',
        description: `CRUD User Management System`
    }
    res.render('index', locals);
}