export interface IProduct {
  'id': number,
  'name': string,
  'amount': string,
  'orderId': number
}
export type TCreateProduct = Omit <IProduct, 'id' & 'orderId'>;

export type TCreatedProduct = Omit <IProduct, 'orderId'>;

export interface IUser {
  id: number,
  'username': string,
  'vocation': string,
  'level': string,
  'password': string,
}

export type TCreateUser = Omit <IUser, 'id'>;

export type TCreatedUSer = Omit <IUser, 'password'>;
