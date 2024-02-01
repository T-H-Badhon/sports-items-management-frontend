import { createSlice } from "@reduxjs/toolkit";

type TUserState = {
  _id: string;
  username: string;
  email: string;
};

const initialState: TUserState = {
  _id: "",
  username: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
