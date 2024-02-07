import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUserState } from "../slices/authSlice";
import { RootState } from "../store";

const BaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/",
  prepareHeaders: (Headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    console.log(getState());

    console.log(token);

    if (token) {
      Headers.set("authorization", token);
    }

    return Headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: BaseQuery,
  endpoints: () => ({}),
});
