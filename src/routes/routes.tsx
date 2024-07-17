import { createBrowserRouter } from 'react-router-dom'
import CartPage from 'src/pages/Cart/CartPage'
import CatalogPage from 'src/pages/Catalog/CatalogPage'
import NotFound from 'src/pages/NotFound/NotFound'
import ProductPage from 'src/pages/ProductPage/ProductPage'
import { RouterPath } from './enums'
import Layout from 'src/layout/Layout'

const router = createBrowserRouter([
  {
    path: RouterPath.Catalog,
    element: <Layout />,
    children: [
      {
        path: RouterPath.Catalog,
        element: <CatalogPage />,
      },
      {
        path: RouterPath.ProductPage,
        element: <ProductPage />,
      },
      {
        path: RouterPath.Cart,
        element: <CartPage />,
      },
    ],
  },
  {
    path: RouterPath.NotFound,
    element: <NotFound />,
  },
])

export default router
