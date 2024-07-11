import { RouterProvider } from 'react-router-dom'
import router from 'src/routes/routes'
import { HelmetProvider } from 'react-helmet-async'
import { useGetItemsQuery } from './api/services/fetchItems'
import { useEffect } from 'react'
import { ItemsReceived } from './api/reducer/itemsReducer'
import { useDispatch } from 'react-redux'

function App() {
  const { data } = useGetItemsQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ItemsReceived(data))
  }, [data])

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
