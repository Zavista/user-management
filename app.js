require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override');

const connectDB = require('./server/config/db')
const startServer = async () => {
    try {
        await connectDB(); // Await for the database connection

        const app = express();
        const port = process.env.PORT || 5000;

        app.use(express.urlencoded({extended: true}));
        app.use(express.json());
        app.use(methodOverride('_method'));


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

        app.listen(port, () => {
            console.log(`Server started on port ${port}!`);
        });
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
};

startServer();

