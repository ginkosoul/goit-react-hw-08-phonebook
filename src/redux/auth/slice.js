import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { toast } from 'react-hot-toast';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleRefreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleLogOutfulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

const handleRefresh = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, { payload }) => {
  toast.error(payload);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleLoginFulfilled)
      .addCase(logIn.fulfilled, handleLoginFulfilled)
      .addCase(logOut.fulfilled, handleLogOutfulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleLogOutfulfilled)
      .addCase(refreshUser.pending, handleRefresh)
      .addMatcher(
        isAnyOf(logIn.rejected, refreshUser.rejected, register.rejected),
        handleRejected
      ),
});

export const authReducer = authSlice.reducer;
