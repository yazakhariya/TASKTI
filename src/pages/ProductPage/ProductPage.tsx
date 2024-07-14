import styles from './ProductPage.module.css'
import imgMini from '../../../public/photo.png'
import { Rating } from 'react-simple-star-rating'
// import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useGetSingleProductQuery } from 'src/api/services/fetchItems'
import loader from 'src/assets/loader.svg'

export default function ProductPage() {
  // const [id, setId] = useState<number>(0)
  const { data, isLoading } = useGetSingleProductQuery({ id: 3 })

  return (
    <main className={styles.main}>
      <Helmet>
        <title>{data?.title}</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      {isLoading ? (
        <img alt="Идет загрузка контента" width={40} height={40} src={loader} />
      ) : (
        <section className={styles.wrapper}>
          <div className={styles.imgBox}>
            <img
              className={styles.mainImg}
              alt="Изображение продукта"
              src={data?.thumbnail}
            />
            <div className={styles.scrollImg}>
              <img alt="Изображение продукта" src={imgMini} />
              <img alt="Изображение продукта" src={imgMini} />
              <img alt="Изображение продукта" src={imgMini} />
              <img alt="Изображение продукта" src={imgMini} />
              <img alt="Изображение продукта" src={imgMini} />
              <img alt="Изображение продукта" src={imgMini} />
            </div>
          </div>
          <div className={styles.contentBox}>
            <h1 className={styles.title}>{data?.title}</h1>
            <div className={styles.meta}>
              <Rating
                initialValue={Math.round(data?.rating)}
                fillColor={'#F14F4F'}
                emptyColor={'#D5D5D5'}
                size={20}
              />
              <span className={styles.metaSpan}>
                {data?.tags.map((tag: string) => `${tag} `)}
              </span>
            </div>
            <span className={styles.stock}>
              {data?.availabilityStatus} {data?.stock} left!
            </span>
            <p className={styles.productInfo}>{data?.description}</p>
            <div className={styles.other}>
              <span className={styles.otherInfo}>
                {data?.warrantyInformation}
              </span>
              <span className={styles.otherInfo}>
                {data?.shippingInformation}
              </span>
            </div>
            <div className={styles.buy}>
              <div className={styles.priceBox}>
                <div className={styles.price}>
                  <span className={styles.priceAfter}>
                    {(
                      parseInt(data?.price) -
                      (parseInt(data?.price) *
                        parseInt(data?.discountPercentage)) /
                        100
                    ).toFixed(2)}
                    $
                  </span>
                  <span className={styles.priceBefore}>{data?.price}</span>
                </div>
                <div className={styles.sale}>
                  <span className={styles.saleText}>Your discount:</span>
                  <span className={styles.salePercent}>
                    {data?.discountPercentage}%
                  </span>
                </div>
              </div>
              <button type="button" className={styles.button}>
                Add to cart
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
