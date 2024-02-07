import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: state => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    },
    fetchUsersFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFail } =
  usersSlice.actions;
export default usersSlice.reducer;
