import express from 'express';
import UserController from '../controllers/user.controller.js';

const appRoutes = express.Router();
const userController = new UserController();

appRoutes
    .get('/', userController.getUsers)
    .get('/:id', userController.getUserById)
    .delete('/:id', userController.deleteUser)
    .put('/:id', userController.updateUser)
    .post('/', userController.creteUser)

export default appRoutes;