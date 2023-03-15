import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute<RowDataPacket[] & IOrder[]>(`
  SELECT o.id, o.user_id AS userId, json_arrayagg(p.id) AS productsIds
  FROM Trybesmith.orders AS o
  inner join Trybesmith.products AS p
  ON o.id = p.order_id
  GROUP BY o.id;
  `);
  return result;
};

const addOrder = async (userId: number): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id)
    VALUES (?)
    `, [userId]);
  return insertId;
};

const orderModel = {
  getAll,
  addOrder,
};

export default orderModel;