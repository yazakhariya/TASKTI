import styles from './Layout.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header userName={'Johnson Smith'} />
      <Outlet />
      <Footer />
    </div>
  )
}
