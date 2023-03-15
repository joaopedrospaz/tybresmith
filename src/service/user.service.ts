import { ILogin, IUser, TCreatedUSer, TCreateUser } from '../interfaces';
import userModels from '../models/users.models';

const createUser = async (user: TCreateUser): Promise<TCreatedUSer> => {
  const result = await userModels.create(user);
  return result;
};

const login = async (dataLogin: ILogin): Promise<IUser[] | []> => {
  const result = await userModels.login(dataLogin);
  return result;
};

const userService = {
  createUser,
  login,
};

export default userService;
