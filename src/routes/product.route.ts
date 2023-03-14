import express from 'express';
import productController from '../controller/products.controller';

const productRouter = express.Router();

productRouter.post('/', productController.create);

export default productRouter;