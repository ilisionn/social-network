import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { router as userRouter } from './routes/users.js';
import { router as postRouter } from './routes/posts.js';
import { router as commentRouter } from './routes/comments.js';
import { router as uploadRouter } from './routes/upload.js';

dotenv.config();
const PORT = process.env.PORT || 4444;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

app.use('/api/user', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/comment', commentRouter);
app.use('/', uploadRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
