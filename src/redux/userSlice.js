import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  name: null,
  photoUrl: null,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    user: (state, action) => {
      state.user = action.payload.email;
      state.name = action.payload.name;
      state.photoUrl = action.payload.photoUrl;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { user, logout } = userSlice.actions;
export default userSlice.reducer;
