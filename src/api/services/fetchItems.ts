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
    getRegisterUser: builder.mutation({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          username: username,
          password: password,
          expiresInMins: 30,
        },
      }),
    }),
  }),
})

export const {
  useGetItemsQuery,
  useGetSingleProductQuery,
  useGetRegisterUserMutation,
} = itemsApi
