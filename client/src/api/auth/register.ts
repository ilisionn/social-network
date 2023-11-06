import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (params) => {
    const { data } = await axios.post('user/register', params);
    return data;
  },
);
