import express from 'express';
import {
  addCommet,
  getComments,
  deleteComment,
} from '../controllers/comment.js';
import { checkAuth } from '../middleware/auth.js';
export const router = express.Router();

router.post('/:id', checkAuth, addCommet);
router.get('/:id', checkAuth, getComments);
router.delete('/', checkAuth, deleteComment);
