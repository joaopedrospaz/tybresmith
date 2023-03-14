import { Request, Response, NextFunction } from 'express';

const validateCreateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });
  if (!level) return res.status(400).json({ message: '"level" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
}; 

export default validateCreateUser;