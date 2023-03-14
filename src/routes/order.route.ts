import express from 'express';
import orderController from '../controller/orders.controller';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getAllOrders);

export default orderRouter;