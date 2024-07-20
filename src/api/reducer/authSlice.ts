import { createSlice } from '@reduxjs/toolkit'
import { UserState } from './types'

const initialState: UserState = {
  isAuthenticated: false,
  user: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    }
  },
})

export const { login } = authSlice.actions
export default authSlice.reducer
