import { useEffect } from 'react'
import styles from './Layout.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useGetCurrentUserQuery } from 'src/api/services/fetchItems'

export default function Layout() {
  const { data, error } = useGetCurrentUserQuery()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (error) {
      localStorage.removeItem('token')
      navigate('/login')
    }
  }, [error])

  return (
    <div className={styles.wrapper}>
      <Header
        userName={`${data?.firstName} ${data?.lastName}`}
        id={Number(data?.id)}
      />
      <Outlet />
      <Footer />
    </div>
  )
}
