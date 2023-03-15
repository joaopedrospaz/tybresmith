import { Request, Response, NextFunction } from 'express';
import validations from '../utils/validations/validations';

const validateCreateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const { type, message } = validations.validationProduct(product);
  if (type) return res.status(400).json({ message });
  next();
}; 

export default validateCreateProduct;