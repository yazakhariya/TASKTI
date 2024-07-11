import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'items',
  initialState: {
    item: [],
  },
  reducers: {
    ItemsReceived(store, action) {
      store.item = action.payload?.products
    },
  },
})

export const { ItemsReceived } = productsSlice.actions
export default productsSlice.reducer
