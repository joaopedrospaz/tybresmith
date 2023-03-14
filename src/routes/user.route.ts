import express from 'express';
import userController from '../controller/user.controller';
import validateCreateUser from '../middlewares/validateCreateUser';

const userRouter = express.Router();

userRouter.post('/', validateCreateUser, userController.createUser);

export default userRouter;