import styles from './Header.module.css'
import logo from '../../../../public/Logo.svg'
import cart from '../../../../public/addtocart.svg'
import { RouterPath } from 'src/routes/enums'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { StoreDefine } from 'src/api/reducer/types'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppDispatch } from 'src/api/store/store'
import { fetchCartItems } from 'src/api/services/fetchCartItems'
import { useDispatch } from 'react-redux'

type Props = {
  userName: string
}

export default function Header({ userName }: Props) {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchCartItems(33))
  }, [])
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isLogoClickable = pathname !== RouterPath.Catalog
  const counted = useSelector((store: StoreDefine) => store.items)

  return (
    <header className={styles.navigationWrapper}>
      <div className={styles.content}>
        <img
          className={styles.logo}
          alt="Логотип сайта"
          src={logo}
          onClick={
            isLogoClickable && pathname !== '/login' ? () => navigate(RouterPath.Catalog) : undefined
          }
        />
        {pathname !== '/login' ? (
          <nav className={styles.menu}>
            <Link to={RouterPath.Catalog} className={styles.link}>
              <span>Catalog</span>
            </Link>
            <Link to={RouterPath.FAQ} className={styles.link}>
              <span>FAQ</span>
            </Link>
            <Link to={RouterPath.Cart} className={styles.link}>
              <span>Cart</span>
              <img
                className={styles.cartImg}
                alt="Переход по ссылке в корзину"
                src={cart}
              />
              <div className={styles.counter}>
                {counted.entities.totalProducts}
              </div>
            </Link>
            <Link to={'*'} className={styles.link}>
              <span>{userName}</span>
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
