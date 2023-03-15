import { Response, Request } from 'express';
import { IOrder } from '../interfaces';
import orderService from '../service/orders.service';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const result: IOrder[] = await orderService.getAllOrders();

  return res.status(200).json(result);
};

const createOrder = async (req: Request, res: Response): Promise<Response> => {
  const { productsIds } = req.body;
  const { id } = req.body.user;
  const result: number[] = await orderService.createOrder(id, productsIds);
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