import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
export const currentUser = createAsyncThunk('user/currentUser', async () => {
  const { data } = await axios.get('user/current');
  return data;
});
