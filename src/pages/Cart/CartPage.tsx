import UiItemCard from 'src/components/UiItemCard/UiItemCard'
import styles from './CartPage.module.css'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { StoreDefine } from 'src/api/reducer/types'
import loader from 'src/assets/loader.svg'

export default function CartPage() {
  const itemsList = useSelector((store: StoreDefine) => store.items)

  return (
    <main>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      {itemsList.loadingStatus === 'loading' ||
      itemsList.loadingStatus === 'failed' ? (
        <img alt="Идет загрузка контента" width={40} height={40} src={loader} />
      ) : (
        <section className={styles.wrapper}>
          <h1 className={styles.heading}>My cart</h1>
          {itemsList.loadingStatus === 'failed' ||
          itemsList?.entities.total === 0 ? (
            <h2 className={styles.noMessage}>No Items</h2>
          ) : (
            <div className={styles.contentBox}>
              <div className={styles.products}>
                {itemsList
                  ? itemsList.entities.products?.map((item) => {
                      return (
                        <UiItemCard
                          key={item.id}
                          img={item.thumbnail}
                          name={item.title}
                          price={(
                            parseInt(item.price) -
                            (parseInt(item.price) *
                              parseInt(item.discountPercentage)) /
                            100
                          ).toFixed(2)}
                          quantity={item.quantity}
                          pageType="cart"
                          width={100}
                          height={100} id={item.id} />
                      )
                    })
                  : null}
              </div>
              <div className={styles.commonPrice}>
                <div className={styles.priceBox}>
                  <div className={styles.priceInfo}>
                    <span className={styles.total}>Total count</span>
                    <span className={styles.amount}>
                      {itemsList.entities.totalProducts} items
                    </span>
                  </div>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceBefore}>
                      Price without discount
                    </span>
                    <span className={styles.priceInfoBefore}>
                      {itemsList.entities.total}$
                    </span>
                  </div>
                </div>
                <div className={styles.priceInfo}>
                  <span className={styles.priceAfter}>Total price</span>
                  <span className={styles.priceInfoAfter}>
                    {itemsList.entities.discountedTotal}$
                  </span>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  )
}
