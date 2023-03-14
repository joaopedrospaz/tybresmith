import jwt, { SignOptions } from 'jsonwebtoken';
import { TCreatedUSer } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'segredinho';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '2d',
};

const generateToken = (data: TCreatedUSer): string => jwt.sign(data, JWT_SECRET, JWT_CONFIG);

const tokenFunciton = {
  generateToken,
};

export default tokenFunciton;
