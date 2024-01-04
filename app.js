require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')

const app = express()
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Static Files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// Routes
app.get('/', (req, res) => {

    const locals = {
        title: "NodeJS",
        description: "Free NodeJS User Management System"
    }
    res.render('index', locals);
})



app.listen(port, ()=>{
    console.log("Server started!")
})