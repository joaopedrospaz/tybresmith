import { IUser, TCreateProduct, TCreateUser } from '../../interfaces';
import schemas from './schemas';

const validationProduct = (product: TCreateProduct) => {
  const { error } = schemas.shcemaProduct.validate(product);
  if (error) return { type: error.details[0].type, message: error.details[0].message };

  return { type: null, message: '' };
};
const validationUSer = (user: TCreateUser) => {
  const { error } = schemas.schemaUser.validate(user);
  if (error) return { type: error.details[0].type, message: error.details[0].message };

  return { type: null, message: '' };
};
const validationLogin = (user: IUser) => {
  const { error } = schemas.shcemaLogin.validate(user);
  if (error) return { type: error.details[0].type, message: error.details[0].message };

  return { type: null, message: '' };
};

const validateNewOrder = (order: number[]) => {
  const { error } = schemas.schemaNewOrder.validate(order);
  
  if (error) return { type: error.details[0].type, message: error.details[0].message };
  return { type: null, message: '' };
};

const validations = {
  validationProduct,
  validationUSer,
  validationLogin,
  validateNewOrder,
};

export default validations;