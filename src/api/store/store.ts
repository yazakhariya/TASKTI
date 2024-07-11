import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from 'src/api/reducer/itemsReducer'
import { itemsApi } from '../services/fetchItems'

export const store = configureStore({
  reducer: {
    item: itemsReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
})
