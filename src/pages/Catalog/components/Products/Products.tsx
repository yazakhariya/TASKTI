import styles from './Products.module.css'
import { mockData } from 'src/mockData/mockData'
import UiItemCard from 'src/components/UiItemCard/UiItemCard'
import productImg from '../../../../../public/image.png'

export default function Products() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.contentBox}>
        <h1 className={styles.heading}>Catalog</h1>
        <input className={styles.input} placeholder="Search by title" />
        <div className={styles.productList}>
          {mockData ? (
            mockData.map((item) => {
              return (
                <UiItemCard
                  img={productImg}
                  name={item.itemName}
                  price={item.itemPrice}
                />
              )
            })
          ) : (
            <span>Not Found</span>
          )}
        </div>
      </div>
      <button className={styles.button}>Show more</button>
    </section>
  )
}
