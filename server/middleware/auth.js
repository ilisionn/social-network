import jwt from 'jsonwebtoken';
import { prisma } from '../prisma/prisma-client.js';
export const checkAuth = async (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ message: 'Ошибка на стороне сервера' });
    console.log(error.message);
  }
};
