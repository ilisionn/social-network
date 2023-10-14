import express from 'express';
import {
  register,
  login,
  current,
  changeUserData,
} from '../controllers/user.js';
import { checkAuth } from '../middleware/auth.js';

export const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.patch('/change-user-data', checkAuth, changeUserData);
router.get('/current', checkAuth, current);
