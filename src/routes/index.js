const express = require('express');
const  UserController = require  ('../controllers/user.controller');

const appRoutes = express.Router();

appRoutes
    .get('/', UserController.getUser)

// export default appRoutes;