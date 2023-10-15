import express from 'express';
import {
  register,
  login,
  current,
  changePrivateData,
  changeUserData,
} from '../controllers/user.js';
import { checkAuth } from '../middleware/auth.js';

export const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.patch('/change-user-data/:id', checkAuth, changeUserData);
router.patch('/change-private-data', checkAuth, changePrivateData);
router.get('/current', checkAuth, current);
