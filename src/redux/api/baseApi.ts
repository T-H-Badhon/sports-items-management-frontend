import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

const BaseQuery = fetchBaseQuery({
  baseUrl: "https://sports-item-management-server-eight.vercel.app/api/",
  prepareHeaders: (Headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

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
