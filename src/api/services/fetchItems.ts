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
    getCurrentUser: builder.query({
      query: () => {
        return {
          url: 'auth/me',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      },
    }),
  }),
})

export const {
  useGetItemsQuery,
  useGetSingleProductQuery,
  useGetRegisterUserMutation,
  useGetCurrentUserQuery,
} = itemsApi
