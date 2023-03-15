import express from 'express';
import userController from '../controller/user.controller';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, userController.login);

export default loginRouter;
