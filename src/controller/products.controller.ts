import { Request, Response } from 'express';
import { IProduct, TCreatedProduct, TCreateProduct } from '../interfaces';
import productService from '../service/products.sercive';

const create = async (req: Request, res: Response): Promise<Response> => {
  const data: TCreateProduct = req.body;
  const result: TCreatedProduct = await productService.createProduct(data);
  return res.status(201).json(result);
}; 
const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const result: IProduct[] = await productService.getAllProduct();
  return res.status(200).json(result);
}; 

const productController = {
  create,
  getAll,
};

export default productController;