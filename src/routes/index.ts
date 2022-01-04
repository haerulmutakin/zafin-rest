import express from 'express';
import { UserController } from '../controllers/user.controller';

const appRoutes = express.Router();
const userController = new UserController();

appRoutes
    .get('/', userController.getUser)

export default appRoutes;