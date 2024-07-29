import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type CurrentUser = {
  firstName: string
  lastName: string
  id: number
  message: string
}

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
    getCurrentUser: builder.query<CurrentUser, void>({
      query: () => ({
        url: 'auth/me',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }),
    }),
    getUpdatedCart: builder.mutation({
      query: ({ id, quantity }) => ({
        url: 'carts/15',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: {
          merge: false,
          products: [
            {
              id: id,
              quantity: quantity,
            },
          ],
        },
      }),
    }),
  }),
})

export const {
  useGetItemsQuery,
  useGetSingleProductQuery,
  useGetRegisterUserMutation,
  useGetCurrentUserQuery,
  useGetUpdatedCartMutation
} = itemsApi
