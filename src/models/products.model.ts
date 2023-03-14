import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IProduct, TCreatedProduct, TCreateProduct } from '../interfaces';
import connection from './connection';

const createProduct = async (product: TCreateProduct): Promise<TCreatedProduct> => {
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
const productModel = {
  getAll,
  createProduct,
};
export default productModel;