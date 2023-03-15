import { Response, Request } from 'express';
import orderService from '../service/orders.service';

const getAllOrders = async (req: Request, res: Response) => {
  const result = await orderService.getAllOrders();

  return res.status(200).json(result);
};

const createOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { id } = req.body.user;
  
  const result = await orderService.createOrder(id, productsIds);

  return res.status(201).json({
    userId: id,
    productsIds: result,
  });
};

const orderController = {
  getAllOrders,
  createOrder,
};

export default orderController;