import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: ({ title, limit }) => `products/search?q=${title}&limit=${limit}`,
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `product/${id}`,
    }),
  }),
})
export const { useGetItemsQuery, useGetSingleProductQuery } = itemsApi
