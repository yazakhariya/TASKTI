import { createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = 'https://dummyjson.com/carts/'

export const fetchCartItems = createAsyncThunk(
  'items/fetchCartItems',
  async (cartId: number) => {
    const response = await fetch(`${BASE_URL}/user/${cartId}`)
    return response.json()
  }
)
