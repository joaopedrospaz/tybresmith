import { IProduct, TCreatedProduct, TCreateProduct } from '../interfaces';
import productModel from '../models/products.model';

const createProduct = async (product: TCreateProduct): Promise<TCreatedProduct> => {
  const result = await productModel.create(product);
  return result;
};
const getAllProduct = async (): Promise<IProduct[]> => {
  const result = await productModel.getAll();
  return result;
};

const productService = {
  createProduct,
  getAllProduct,
};

export default productService;