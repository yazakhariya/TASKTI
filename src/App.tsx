import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from 'src/routes/routes'
import { HelmetProvider } from 'react-helmet-async'

export default function App() { 
  return (
    <HelmetProvider>
      <RouterProvider router={createBrowserRouter(router())} />
    </HelmetProvider>
  )
}
