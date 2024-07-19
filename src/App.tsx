import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from 'src/routes/routes'
import { HelmetProvider } from 'react-helmet-async'
import { useUserContext } from './api/context/userContext/createContext'


export default function App() {
  const [user] = useUserContext()
  return (
    <HelmetProvider>
      <RouterProvider router={createBrowserRouter(router(!!user.uid))} />
    </HelmetProvider>
  )
}