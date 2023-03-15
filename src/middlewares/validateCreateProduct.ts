import { Request, Response, NextFunction } from 'express';
import validations from '../utils/validations/validations';

const validateCreateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const { type, message } = validations.validationProduct(product);
  if (type === 'any.required') return res.status(400).json({ message });
  return res.status(422).json({ message });
  next();
}; 

export default validateCreateProduct;