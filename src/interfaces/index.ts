export interface IProduct {
  'id': number,
  'name': string,
  'amount': string,
  'orderId': number
}
export type TCreateProduct = Omit <IProduct, 'id' & 'orderId'>;

export type TCreatedProduct = Omit <IProduct, 'orderId'>;