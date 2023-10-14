import dotenv from 'dotenv';
dotenv.config();
// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router as userRouter } from './routes/users.js';
const PORT = process.env.PORT || 4444;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', userRouter);
// require('./routes/users.ts')
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
