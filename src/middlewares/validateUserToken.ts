import { Response, Request, NextFunction } from 'express';
import tokenFunciton from '../utils/token';

const validateUserToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) res.status(401).json({ message: 'Token not found' });
    const data = tokenFunciton.validateToken(authorization as string);
    req.body.user = data;
    
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateUserToken;