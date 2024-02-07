import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}

interface AuthState {
  isLoading: boolean;
  user: UserProfile | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserProfile: (state, action: PayloadAction<UserProfile | null>) => {
      state.user = action.payload;
    },
    setAuthError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearAuthState: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { setAuthLoading, setUserProfile, setAuthError, clearAuthState } =
  authSlice.actions;
export default authSlice.reducer;
