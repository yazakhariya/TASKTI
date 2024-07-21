import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from 'src/api/reducer/itemsReducer'
import { itemsApi } from '../services/fetchItems'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
