import { createSlice } from '@reduxjs/toolkit'
import { fetchCartItems } from '../services/fetchCartItems'
import { ItemsState } from './types'

const initialState: ItemsState = {
  entities: [],
  loadingStatus: 'idle',
  error: null,
  quantity: null
}

const productsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loadingStatus = 'loading'
        state.error = null
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loadingStatus = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loadingStatus = 'fulfilled'
        state.error = null
        state.entities = action.payload?.carts[0]
        state.quantity = action.payload?.carts[0]?.totalQuantity
      })
  },
})

export default productsSlice.reducer
