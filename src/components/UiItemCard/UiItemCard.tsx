import addButton from '../../../public/addtocart.svg'
import styles from './UiItemCard.module.css'

type Props = {
  img: string
  name: string
  price: string
}

export default function UiItemCard({ img, name, price }: Props) {
  return (
    <div>
      <img
        className={styles.productImg}
        alt={`Изображение товара ${name}`}
        src={img}
      />
      <div className={styles.contentBox}>
        <div className={styles.textBox}>
          <span className={styles.itemName}>{name}</span>
          <span className={styles.itemPrice}>{price}</span>
        </div>
        <button type="button" className={styles.button}>
          <img alt="Кнопка добавления продукта в корзину" src={addButton} />
        </button>
      </div>
    </div>
  )
}
