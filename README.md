# Employee Management CRUD Project

This project is a Employee Management system that utilizes Express.js, MongoDB, Node.js, EJS, Bootstrap, and a RESTful API for CRUD operations.

## Features

- **Create:** Add new employees to the system.
- **Read:** View existing employees with various details.
- **Update:** Modify employee information.
- **Delete:** Remove employees from the database.

## Technologies Used

- **Express.js:** Web application framework for Node.js used to create RESTful APIs.
- **MongoDB:** NoSQL database used for storing user information.
- **Node.js:** JavaScript runtime for executing server-side code.
- **EJS:** Templating engine for generating HTML markup.
- **Bootstrap:** Front-end framework for designing responsive and attractive UI.

## API Endpoints

- **GET `/`**: Displays the homepage.
- **GET `/add`**: Renders a form to add a new employee.
- **POST `/add`**: Handles the submission of the form to create a new employee.
- **GET `/view/:id`**: Displays details of a specific employee.
- **GET `/edit/:id`**: Renders a form to edit a specific employee.
- **PUT `/edit/:id`**: Handles the submission of the form to update employee details.
- **DELETE `/edit/:id`**: Deletes a specific employee.
- **POST `/search`**: Handles searching for employees.
