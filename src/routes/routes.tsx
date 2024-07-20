import { Navigate, RouteObject } from 'react-router-dom'
import CartPage from 'src/pages/Cart/CartPage'
import CatalogPage from 'src/pages/Catalog/CatalogPage'
import NotFound from 'src/pages/NotFound/NotFound'
import ProductPage from 'src/pages/ProductPage/ProductPage'
import { RouterPath } from './enums'
import Layout from 'src/layout/Layout'
import AuthPage from 'src/pages/AuthPage/AuthPage'

function Router(): RouteObject[] {
  const token = localStorage.getItem('token')
  return [
    {
      path: RouterPath.Catalog,
      element: <Layout />,
      children: [
        {
          path: RouterPath.Catalog,
          element: !token ? (
            <Navigate to={RouterPath.SignIn} />
          ) : (
            <CatalogPage />
          ),
        },
        {
          path: RouterPath.ProductPage,
          element: token ? (
            <ProductPage />
          ) : (
            <Navigate to={RouterPath.SignIn} />
          ),
        },
        {
          path: RouterPath.Cart,
          element: token ? (
            <CartPage />
          ) : (
            <Navigate to={RouterPath.SignIn} />
          ),
        },
        {
          path: RouterPath.SignIn,
          element: <AuthPage />,
        },
        {
          path: RouterPath.NotFound,
          element: <NotFound />,
        },
      ],
    },
  ]
}

export default Router
