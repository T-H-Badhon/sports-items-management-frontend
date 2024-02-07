import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (queries) => ({
        url: `products/`,
        method: "GET",
        params: queries,
      }),
    }),
    addProduct: builder.mutation({
      query: (productData) => ({
        url: "products/add-product",
        method: "POST",
        body: productData,
      }),
    }),
  }),
});

export const { useAllProductsQuery, useAddProductMutation } = productApi;
