import { baseApi } from "../baseApi";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allSales: builder.query({
      query: (queries) => ({
        url: `sales/`,
        method: "GET",
        params: queries,
      }),
    }),
    sellProduct: builder.mutation({
      query: (productData) => ({
        url: "sales",
        method: "POST",
        body: productData,
      }),
    }),
  }),
});

export const { useAllSalesQuery, useSellProductMutation } = saleApi;
