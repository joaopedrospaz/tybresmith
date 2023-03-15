import { Request, Response, NextFunction } from 'express';
import validations from '../utils/validations/validations';

const validateCreateUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const { type, message } = validations.validationUSer(user);
  if (type === 'any.required') return res.status(400).json({ message });
  if (type) return res.status(422).json({ message });
  next();
}; 

export default validateCreateUser;