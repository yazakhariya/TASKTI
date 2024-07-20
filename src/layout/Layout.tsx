import styles from './Layout.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { useGetCurrentUserQuery } from 'src/api/services/fetchItems'

export default function Layout() {
  const { data } = useGetCurrentUserQuery()
  
  if (data?.message === 'Invalid/Expired Token!') {
    localStorage.removeItem('token')
  }

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
