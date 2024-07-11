import { createSlice } from '@reduxjs/toolkit'

interface ItemsState {
  items: string[]
  loading: boolean
  error: null | string
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchItems(state) {
      return { ...state, loading: true }
    },
    fetchItemsOnSuccess(state, action) {
      return { ...state, loading: false, items: action.payload }
    },
    fetchItemsError(state, action) {
      return { ...state, error: action.payload }
    },
  },
})

export const { fetchItems, fetchItemsError, fetchItemsOnSuccess } =
  itemsSlice.actions
export default itemsSlice.reducer
