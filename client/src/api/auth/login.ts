import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
export const userLogin = createAsyncThunk('auth/loginUser', async (params) => {
  const { data } = await axios.post('user/login', params);
  return data;
});
