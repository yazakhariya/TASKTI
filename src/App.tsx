import { RouterProvider } from 'react-router-dom'
import router from 'src/routes/routes'
import { HelmetProvider } from 'react-helmet-async'
function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
