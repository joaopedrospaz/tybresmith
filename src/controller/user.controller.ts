import { Request, Response } from 'express';
import { TCreateUser } from '../interfaces';
import userService from '../service/user.service';
import tokenFunciton from '../utils/token';

const createUser = async (req: Request<object, object, TCreateUser>, res: Response) => {
  const user = req.body;

  const result = await userService.createUser(user);

  const token = tokenFunciton.generateToken(result);

  res.status(201).json({ token });
};

const userController = {
  createUser,
};

export default userController;