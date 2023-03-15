import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { TCreatedUSer } from '../interfaces';

const JWT_SECRET: string = process.env.JWT_SECRET || 'segredinho';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '2d',
};

const generateToken = (data: TCreatedUSer): string => jwt.sign(data, JWT_SECRET, JWT_CONFIG);

const validateToken = (token: string): JwtPayload | string => jwt.verify(token, JWT_SECRET);

const tokenFunciton = {
  generateToken,
  validateToken,
};

export default tokenFunciton;
