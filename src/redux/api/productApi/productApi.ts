import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (loginData) => ({
        url: "auth/login",
        method: "GET",
        body: loginData,
      }),
    }),
  }),
});

export const { useAllProductsQuery } = productApi;
