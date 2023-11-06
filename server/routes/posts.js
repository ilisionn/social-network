import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getOnePost,
  patchPost,
  getUserPosts,
  likePost,
  removeLikePost,
} from '../controllers/post.js';
import { checkAuth } from './../middleware/auth.js';

export const router = express.Router();

router.get('/all', getAllPosts);
router.get('/user-posts/:authorId', getUserPosts);
router.get('/:id', getOnePost);
router.post('/create-post', checkAuth, createPost);
router.patch('/update-post/:id', checkAuth, patchPost);
router.patch('/likePost/:id', checkAuth, likePost);
router.patch('/removeLikePost/:id', checkAuth, removeLikePost);
router.delete('/delete-post', checkAuth, deletePost);
