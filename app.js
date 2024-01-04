require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');

const connectDB = require('./server/config/db')
connectDB()

const app = express()
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Static Files
app.use(express.static('public'));

// Express Session
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        }
    })
)

// Flash Message
app.use(flash({sessionKeyName: 'flashMessage'}))

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// Routes
const employeeRouter = require('./server/routes/employee')
app.use('/', employeeRouter)

// Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404')
})


app.listen(port, ()=>{
    console.log("Server started!")
})