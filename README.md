# Elitte Institute of Engineering and Mnagement

The application will consist of a separate frontend, backend, and database. It will consist of Content Management System which requires Authentication. From the CMS Admin Users will be able to do CRUD Operations and will be able to manipulate data in the frontend dynamically. The frontend will communicate with the backend using REST API. The UI/UX design of the frontend will be done using React.js. The application is going to follow the Model View Controller Architecture (MVC). The frontend is going to represent the View part. The Controller Section is going to consist of Business Logic and the Model is going to contain all the Database Queries.
### Required Toools
* VScode - Code Editor
* MYSQL Workbench - Database Management Tool
* Git Bash - GitCLI for Git Operations
* POSTMAN - API Testing Tool


### Technology Stack
This web application is going to be built on top of microservice architechture.
##### Frontend
* [ReactJS] - A JavaScript library for building user interfaces
* [Material UI] - React components for faster and easier web development. Build your own design system, or start with Material Design
* [CKEditor] - Smart WYSIWYG editor components with collaborative editing
##### Backend
* [Nodejs] - Free, open-sourced, cross-platform JavaScript run-time environment
* [TypeScript] - TypeScript extends JavaScript by adding types. TypeScript saves you time catching errors and providing fixes before you     
 run code.
* [JSON Web Token] - JWT for Authentication & Authorization

##### Database
* [MYSQL Workbench] - MySQL Workbench provides data modeling, SQL development, and comprehensive administration tools for server configuration, user administration, backup, and much more.

### Prerequisites
* Node version 12.18.1 or above must be installed.
* MYSQL Service along with MYSQL Workbench must be installed.

### Development
Requires [MYSQL] service to run and create database.
Start the MYSQL database service before starting backend.



#### To run the backend server
```
$ cd backend
$ npm i
$ npm start
```
#### To run the frontend server
##### Backend API and URL Configurations
* All the configuration files for URL (production and dev) are stored inside frotend/src/configs folder.
* Use config.js file inside the configs folder to configure baseURL and baseAPIURL
* By default baseURL is set to http://localhost:8080 until  process.env.NODE_ENV === 'development'

```
$ cd frontend
$ npm i
$ npm start
```
Development is still on progress.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)

[ReactJS]:https://reactjs.org/
[Material UI]:https://material-ui.com/
[CKEditor]: https://ckeditor.com/
[Nodejs]: https://nodejs.dev/
[TypeScript]: https://www.typescriptlang.org/
[JSON Web Token]: https://jwt.io/
[MYSQL]: https://www.mysql.com/
[MYSQL Workbench]: https://www.mysql.com/downloads/
