import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getOnePost,
  patchPost,
} from '../controllers/post.js';
import { checkAuth } from './../middleware/auth.js';

export const router = express.Router();

router.get('/all', getAllPosts);
router.get('/:id', getOnePost);
router.post('/create-post', checkAuth, createPost);
router.patch('/update-post/:id', checkAuth, patchPost);
router.delete('/delete-post', checkAuth, deletePost);
