import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "user/login",
        method: "POST",
        body: loginData,
      }),
    }),
    signUp: builder.mutation({
      query: (registerData) => ({
        url: "user/register",
        method: "POST",
        body: registerData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
