import express from 'express';
import orderController from '../controller/orders.controller';
import validateOrder from '../middlewares/validateOrder';
import validateUserToken from '../middlewares/validateUserToken';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getAllOrders);
orderRouter.post('/', validateUserToken, validateOrder, orderController.createOrder);

export default orderRouter;