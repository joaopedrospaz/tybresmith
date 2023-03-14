import { Request, Response } from 'express';
import productModel from '../models/products.model';

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await productModel.createProduct(data);
  res.status(201).json(result);
}; 

const productController = {
  create,
};

export default productController;