import { createBrowserRouter } from 'react-router-dom'
import CartPage from 'src/pages/Cart/CartPage'
import CatalogPage from 'src/pages/Catalog/CatalogPage'
import NotFound from 'src/pages/NotFound/NotFound'
import ProductPage from 'src/pages/ProductPage/ProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CatalogPage />,
    errorElement: <NotFound />
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  }
])

export default router
