import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IProduct, TCreatedProduct, TCreateProduct } from '../interfaces';
import connection from './connection';

const create = async (product: TCreateProduct): Promise<TCreatedProduct> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) 
    VALUES (?, ?);
    `, [name, amount]); 
  return {
    id: insertId,
    name, 
    amount,
  };
};

const getAll = async (): Promise<IProduct[]> => {
  const [result] = await connection
    .execute<RowDataPacket[] & IProduct[]>('SELECT * FROM Trybesmith.products');
  return result;
};

const update = async (id: number, orderId: number): Promise<number> => {
  const [{ affectedRows }] = await connection.execute<ResultSetHeader>(`
    UPDATE Trybesmith.products SET Trybesmith.products.order_id = ? WHERE Trybesmith.products.id = ?
  `, [orderId, id]);
  return affectedRows;
};

const getProductByOrderId = async (orderId: number): Promise<number[]> => {
  const [[{ id }]] = await connection.execute<RowDataPacket[] & number[]>(`
  SELECT json_arrayagg(Trybesmith.products.id) as id
   FROM Trybesmith.products WHERE Trybesmith.products.order_id = ?;
  `, [orderId]);
  return id;
};

const productModel = {
  getAll,
  create,
  update,
  getProductByOrderId,
};

export default productModel;