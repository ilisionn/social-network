import { createSlice } from '@reduxjs/toolkit';
import { currentUser } from 'src/api/auth/current';

import { userLogin } from 'src/api/auth/login';
import { registerUser } from 'src/api/auth/register';
export type UserType = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  age: string;
  bio: string;
  avatar: string;
  background: string;
};

export interface IAuthUser {
  data: UserType | null;
  state: string;
}

const initialState: IAuthUser = {
  data: null,
  state: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.data = null;
      state.state = 'pending';
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.state = 'loaded';
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.data = null;
      state.state = 'error';
    });
    builder.addCase(registerUser.pending, (state) => {
      state.data = null;
      state.state = 'pending';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.state = 'loaded';
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.data = null;
      state.state = 'error';
    });
    builder.addCase(currentUser.pending, (state) => {
      state.data = null;
      state.state = 'pending';
    });
    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.state = 'loaded';
    });
    builder.addCase(currentUser.rejected, (state) => {
      state.data = null;
      state.state = 'error';
    });
  },
});

export const isAuthSelector = (state: { auth: IAuthUser }) =>
  Boolean(state.auth.data);
export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
