import { Request, Response, NextFunction } from 'express';
import validations from '../utils/validations/validations';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const login = req.body;
  const { type, message } = validations.validationLogin(login);
  if (type) return res.status(400).json({ message });
  next();
}; 

export default validateLogin;