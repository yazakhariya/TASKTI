import { createContext, useContext } from 'react'
import { INIT_USER_STATE } from './constants'

export const Context = createContext([INIT_USER_STATE])

export const useUserContext = () => {
  const userContext = useContext(Context)
  if (!userContext) {
    throw new Error('useUserContext can be accessed only under Providers')
  }
  return userContext
}
