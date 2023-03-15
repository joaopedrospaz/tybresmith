import { IOrder } from '../interfaces';
import orderModel from '../models/orders.models';
import productModel from '../models/products.model';

const getAllOrders = async (): Promise<IOrder[]> => {
  const result = await orderModel.getAll();
  return result;
};

const createOrder = async (id: number, arr: number[]): Promise<number[]> => {
  const orderId = await orderModel.addOrder(id);
  await Promise.all(arr.map(async (elem) => productModel.update(elem, orderId)));

  const products = await productModel.getProductByOrderId(orderId);
  return products;
};

const orderService = {
  getAllOrders,
  createOrder,
};

export default orderService;