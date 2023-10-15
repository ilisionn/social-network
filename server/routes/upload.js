import express from 'express';
export const router = express.Router();
import { multerMW } from '../middleware/uploads.js';
import { checkAuth } from '../middleware/auth.js';
router.post('/upload', checkAuth, multerMW.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});
