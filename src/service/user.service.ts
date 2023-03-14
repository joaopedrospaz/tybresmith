import { TCreatedUSer, TCreateUser } from '../interfaces';
import userModels from '../models/users.models';

const createUser = async (user: TCreateUser): Promise<TCreatedUSer> => {
  const result = await userModels.create(user);
  return result;
};

const userService = {
  createUser,
};

export default userService;
