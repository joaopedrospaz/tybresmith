import { Request, Response, NextFunction } from 'express';
import validations from '../utils/validations/validations';

const validateOrder = async (req: Request, res: Response, next: NextFunction) => {
  const productsIds = req.body;
  const { type, message } = validations.validateNewOrder(productsIds);
  if (type === 'any.required') return res.status(400).json({ message });
  if (type) return res.status(422).json({ message });
  next();
}; 

export default validateOrder;