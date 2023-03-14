import { Response, Request } from 'express';
import orderService from '../service/orders.service';

const getAllOrders = async (req: Request, res: Response) => {
  const result = await orderService.getAllOrders();

  return res.status(200).json(result);
};

const orderController = {
  getAllOrders,
};

export default orderController;