import styles from './UiItemCard.module.css'
import addButton from '../../../public/addtocart.svg'

type Props = {
  img: string
  name: string
  price: string
  width?: number
  height?: number
}

export default function DeletedItem({
  img,
  name,
  price,
  width,
  height,
}: Props) {
  return (
    <div className={`${styles.wrapper} ${styles.cartContentBox}`}>
      <img
        className={`${styles.productImg} ${styles.deleted}`}
        alt={`Изображение товара ${name}`}
        src={img}
        width={width}
        height={height}
      />
      <div className={`${styles.contentBox} ${styles.deletedItem}`}>
        <div className={`${styles.textBox} ${styles.deleted}`}>
          <span className={styles.itemName}>{name}</span>
          <span className={styles.itemPrice}>{price}</span>
        </div>
        <button
          type="button"
          className={`${styles.button} ${styles.deletedButtonState}`}
        >
          <img alt="Кнопка добавления продукта в корзину" src={addButton} />
        </button>
      </div>
    </div>
  )
}
