import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getItems: builder.query<BaseQueryFn, void>({
      query: () => 'products',
    }),
  }),
})
export const { useGetItemsQuery } = itemsApi