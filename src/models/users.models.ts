import { ResultSetHeader } from 'mysql2';
import { TCreatedUSer, TCreateUser } from '../interfaces';
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

const userModels = {
  create,
};

export default userModels;