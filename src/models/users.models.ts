import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin, IUser, TCreatedUSer, TCreateUser } from '../interfaces';
import connection from './connection';

const create = async (user: TCreateUser): Promise<TCreatedUSer> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password )
    VALUES (?, ?, ?, ?);
    `, [username, vocation, level, password]);
  return {
    id: insertId,
    username,
    vocation,
    level,
  };
};

const login = async (dataLogin: ILogin): Promise<IUser[] | []> => {
  const { username, password } = dataLogin;
  const [result] = await connection.execute<RowDataPacket[] & IUser[]>(`
  SELECT * FROM Trybesmith.users WHERE username = ? and password = ?; 
  `, [username, password]);
  return result;
};

const userModels = {
  create,
  login,
};

export default userModels;