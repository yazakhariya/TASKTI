import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => ``,
    }),
  }),
})
export const { useGetItemsQuery } = itemsApi
