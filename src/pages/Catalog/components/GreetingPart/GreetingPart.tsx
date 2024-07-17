import styles from './GreetingPart.module.css'

export default function GreetingPart() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.contentBox}>
        <h1 className={styles.heading}>
          Any products from famous brands <br /> with worldwide delivery
        </h1>
        <p className={styles.text}>
          We sell smartphones, laptops, clothes, shoes <br /> and many other products
          at low prices
        </p>
        <button className={styles.button}>Go to shopping</button>
      </div>
      <span className={styles.behindText}>Goods4you</span>
    </section>
  )
}
