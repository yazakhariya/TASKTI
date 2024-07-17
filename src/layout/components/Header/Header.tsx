import styles from './Header.module.css'
import logo from '../../../../public/Logo.svg'
import cart from '../../../../public/addtocart.svg'
import { RouterPath } from 'src/routes/enums'
import { Link, useLocation, useNavigate } from 'react-router-dom'

type Props = {
  userName: string
}

export default function Header({ userName }: Props) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isLogoClickable = pathname !== RouterPath.Catalog
  return (
    <header className={styles.navigationWrapper}>
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
          <Link to={RouterPath.Cart} className={styles.link}>
            <span>Cart</span>
            <img alt="Переход по ссылке в корзину" src={cart} />
          </Link>
          <Link to={'*'} className={styles.link}>
            <span>{userName}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
