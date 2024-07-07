import UiItemCard from 'src/components/UiItemCard/UiItemCard'
import styles from './CartPage.module.css'
import { mockData } from 'src/mockData/mockData'
import productImg from '../../../public/photo.png'
import { Helmet } from 'react-helmet-async'

export default function CartPage() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        /></Helmet>
      <section className={styles.wrapper}>
        <h1 className={styles.heading}>My cart</h1>
        <div className={styles.contentBox}>
          <div className={styles.products}>
            {mockData
              ? mockData
                  .map((item) => {
                    return (
                      <UiItemCard
                        img={productImg}
                        name={item.itemName}
                        price={item.itemPrice}
                        pageType="cart"
                        width={100}
                        height={100}
                      />
                    )
                  })
                  .splice(0, 3)
              : null}
            <UiItemCard
              img={productImg}
              name={mockData[4].itemName}
              price={mockData[4].itemPrice}
              pageType="cart"
              width={100}
              height={100}
              deleted={true}
            />
          </div>
          <div className={styles.commonPrice}>
            <div className={styles.priceBox}>
              <div className={styles.priceInfo}>
                <span className={styles.total}>Total count</span>
                <span className={styles.amount}>3 items</span>
              </div>
              <div className={styles.priceInfo}>
                <span className={styles.priceBefore}>
                  Price without discount
                </span>
                <span className={styles.priceInfoBefore}>700$</span>
              </div>
            </div>
            <div className={styles.priceInfo}>
              <span className={styles.priceAfter}>Total price</span>
              <span className={styles.priceInfoAfter}>590$</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
