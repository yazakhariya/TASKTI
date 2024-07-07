import styles from './ProductPage.module.css'
import imgMain from '../../../public/main photo.png'
import imgMini from '../../../public/photo.png'
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function ProductPage() {
  const [ratingValue, setRatingValue] = useState<number>(0)
  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <section className={styles.wrapper}>
        <div className={styles.imgBox}>
          <img
            className={styles.mainImg}
            alt="Изображение продукта"
            src={imgMain}
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
          <h1 className={styles.title}>Essence Mascara Lash Princess</h1>
          <div className={styles.meta}>
            <Rating
              onClick={handleRating}
              initialValue={ratingValue}
              fillColor={'#F14F4F'}
              emptyColor={'#D5D5D5'}
              size={20}
            />
            <span className={styles.metaSpan}>electronics, selfie accessories</span>
          </div>
          <span className={styles.stock}>In Stock - Only 5 left!</span>
          <p className={styles.productInfo} >The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p>
          <div className={styles.other}>
            <span className={styles.otherInfo}>1 month warranty</span>
            <span className={styles.otherInfo}>Ships in 1 month</span>
          </div>
          <div className={styles.buy}>
            <div className={styles.priceBox}>
              <div className={styles.price}>
                <span className={styles.priceAfter}>7.17$</span>
                <span className={styles.priceBefore}>9.99$</span>
              </div>
              <div className={styles.sale}>
                <span className={styles.saleText}>Your discount:</span>
                <span className={styles.salePercent}>14.5%</span>
              </div>
            </div>
            <button type='button' className={styles.button}>Add to cart</button>
          </div>
        </div>
      </section>
    </main>
  )
}
