import { useState } from 'react'
import addButton from '../../../public/addtocart.svg'
import minus from '../../../public/minus.svg'
import plus from '../../../public/plus.svg'
import styles from './UiItemCard.module.css'
import DeletedItem from './deletedItem'

type Props = {
  img: string
  name: string
  price: string
  pageType?: string
  width?: number
  height?: number
  deleted?: boolean
}

export default function UiItemCard({
  img,
  name,
  price,
  pageType,
  width,
  height,
  deleted,
}: Props) {
  const [count, setCount] = useState<number>(0)
  const decrement = () => {
    if (count === 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
    return count
  }

  return (
    <>
      {deleted ? (
        <DeletedItem
          width={width}
          height={height}
          img={img}
          name={name}
          price={price}
        />
      ) : (
        <div className={pageType === 'cart' ? `${styles.wrapper} + ${styles.item}` : undefined}>
          <div className={styles.container}>
            <img
              className={styles.productImg}
              alt={`Изображение товара ${name}`}
              src={img}
              width={width}
              height={height}
            />
            {pageType === 'cart' ? null : (
              <div className={styles.overlay}>
                <div className={styles.text}>Show details</div>
              </div>
            )}
          </div>
          <div
            className={
              pageType === 'cart'
                ? `${styles.cartContentBox}`
                : `${styles.contentBox}`
            }
          >
            <div className={styles.textBox}>
              <span className={styles.itemName}>{name}</span>
              <span className={styles.itemPrice}>{price}</span>
            </div>
            {/* пока не знаю, как избавиться от многоуровневого тернарника
            эта часть кода будет отрефакторена
         */}
            {pageType === 'cart' ? (
              <>
                <div className={styles.buttonBox}>
                  <button onClick={decrement} className={styles.button}>
                    <img alt={'Кнопка убывания товара'} src={minus} />
                  </button>
                  <span className={styles.itemAmount}>
                    {count} {count > 1 ? 'Items' : 'Item'}
                  </span>
                  <button
                    onClick={() => setCount(count + 1)}
                    className={styles.button}
                  >
                    <img alt={'Кнопка добавления товара'} src={plus} />
                  </button>
                </div>
                <button className={styles.buttonDelete}>Delete</button>
              </>
            ) : (
              <button type="button" className={styles.button}>
                <img
                  alt="Кнопка добавления продукта в корзину"
                  src={addButton}
                />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
