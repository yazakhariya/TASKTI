import styles from './Products.module.css'
import UiItemCard from 'src/components/UiItemCard/UiItemCard'
import { useSelector } from 'react-redux'
import { Store } from 'src/types'
import loader from 'src/assets/loader.svg'

export default function Products() {
  const items = useSelector((store: Store) => store.item.item)

  return (
    <section className={styles.wrapper}>
      <div className={styles.contentBox}>
        <h1 className={styles.heading}>Catalog</h1>
        <input className={styles.input} placeholder="Search by title" />
        <div className={styles.productList}>
          {items ? (
            items.map((item) => {
              return (
                <UiItemCard
                  key={item.id}
                  img={item.thumbnail}
                  name={item.title}
                  price={item.price}
                  width={370}
                  height={300}
                />
              )
            })
          ) : (
            <img
              alt="Идет загрузка контента"
              width={40}
              height={40}
              src={loader}
            />
          )}
        </div>
      </div>
      <button className={styles.button}>Show more</button>
    </section>
  )
}
