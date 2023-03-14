import { Request, Response } from 'express';
import productService from '../service/products.sercive';

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await productService.createProduct(data);
  res.status(201).json(result);
}; 
const getAll = async (_req: Request, res: Response) => {
  const result = await productService.getAllProduct();
  res.status(200).json(result);
}; 

const productController = {
  create,
  getAll,
};

export default productController;