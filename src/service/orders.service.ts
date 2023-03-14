import { IOrder } from '../interfaces';
import orderModel from '../models/orders.models';

const getAllOrders = async (): Promise<IOrder[]> => {
  const result = await orderModel.getAll();
  return result;
};

const orderService = {
  getAllOrders,
};

export default orderService;