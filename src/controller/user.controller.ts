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

const login = async (req: Request, res: Response) => {
  const dataLogin = req.body;
  const result = await userService.login(dataLogin);
  if (result.length === 0) return res.status(401).json({ message: 'Username or password invalid' });

  const { password, ...withoutPassword } = result[0];
  const token = tokenFunciton.generateToken(withoutPassword);
  return res.status(200).json({ token });
};

const userController = {
  createUser,
  login,
};

export default userController;