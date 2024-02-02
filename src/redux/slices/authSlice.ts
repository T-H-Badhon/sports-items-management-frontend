import { createSlice } from "@reduxjs/toolkit";

type TUserState = {
  _id: string;
  username: string;
};

const initialState: TUserState = {
  _id: "",
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
    },
    logOut: (state) => {
      state._id = "";
      state.username = "";
    },
  },
});
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
