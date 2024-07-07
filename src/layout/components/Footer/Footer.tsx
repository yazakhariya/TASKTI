import styles from './Footer.module.css'
import logo from '../../../../public/Logo.svg'
import { RouterPath } from 'src/routes/enums'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isLogoClickable = pathname !== RouterPath.Catalog
  return (
    <footer
      className={
        isLogoClickable
          ? `${styles.wrapper} ${styles.footerFixed}`
          : styles.wrapper
      }
    >
      <div className={styles.content}>
        <img
          className={styles.logo}
          alt="Логотип сайта"
          src={logo}
          onClick={
            isLogoClickable ? () => navigate(RouterPath.Catalog) : undefined
          }
        />
        <nav className={styles.menu}>
          <Link to={RouterPath.Catalog} className={styles.link}>
            <span>Catalog</span>
          </Link>
          <Link to={RouterPath.FAQ} className={styles.link}>
            <span>FAQ</span>
          </Link>
        </nav>
      </div>
    </footer>
  )
}
