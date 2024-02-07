import { createSlice } from "@reduxjs/toolkit";

export type TUserState = {
  _id: string;
  username: string;
  token: string;
};

const initialState: TUserState = {
  _id: "",
  username: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state._id = "";
      state.username = "";
      state.token = "";
    },
  },
});
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
