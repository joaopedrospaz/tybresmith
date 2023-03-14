import express from 'express';
import productController from '../controller/products.controller';
import validateCreateProduct from '../middlewares/validateCreateProduct';

const productRouter = express.Router();

productRouter.post('/', validateCreateProduct, productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;