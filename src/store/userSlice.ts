import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  token: string;
  isAuthenticated: boolean; 
}

const initialState: UserState = {
  email: '',
  token: '',
  isAuthenticated: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.email = '';
      state.token = '';
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;