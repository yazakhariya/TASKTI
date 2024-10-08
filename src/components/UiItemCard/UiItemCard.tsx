import { useState } from 'react'
import addButton from '../../../public/addtocart.svg'
import minus from '../../../public/minus.svg'
import plus from '../../../public/plus.svg'
import styles from './UiItemCard.module.css'
import DeletedItem from './deletedItem'
import { useNavigate } from 'react-router-dom'
import { useGetUpdatedCartMutation } from 'src/api/services/fetchItems'
import { decrement } from './countFn'

type Props = {
  img: string
  name: string
  price: string
  quantity: number
  pageType?: string
  width?: number
  height?: number
  deleted?: boolean
  id: number
}

export default function UiItemCard({
  img,
  name,
  price,
  pageType,
  width,
  height,
  quantity,
  id,
}: Props) {
  const [count, setCount] = useState<number>(quantity)
  const [deleted, setDeleted] = useState<boolean>(false)
  const navigate = useNavigate()
  const [getUpdate] = useGetUpdatedCartMutation()

  const handleUpdate = async () => {
    await getUpdate({ id, quantity })
      .unwrap()
      .then((res) => sessionStorage.setItem('res', res.totalQuantity))

    if (pageType === 'cart') {
      setDeleted(true)
    }
  }

  const handleAddItems = async () => {
    await getUpdate({ id, quantity })
      .unwrap()
      .then((res) => console.log(res))
  }

  const increment = () => {
    setCount(count + 1)
    handleAddItems()
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
        <div
          className={
            pageType === 'cart'
              ? `${styles.wrapper} + ${styles.item}`
              : undefined
          }
        >
          <div className={styles.container}>
            <img
              className={styles.productImg}
              alt={`Изображение товара ${name}`}
              src={img}
              width={width}
              height={height}
            />
            {pageType === 'cart' ? null : (
              <div
                onClick={() => navigate(`/product/${id}`)}
                className={styles.overlay}
              >
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
              <span
                className={styles.itemName}
                onClick={() => navigate(`/product/${id}`)}
              >
                {name.length > 18 ? name.slice(0, 17) + '...' : name}
              </span>
              <span className={styles.itemPrice}>{price}</span>
            </div>
            {/* пока не знаю, как избавиться от многоуровневого тернарника
            эта часть кода будет отрефакторена
         */}
            {pageType === 'cart' || quantity > 0 || count > 0 ? (
              <>
                <div className={styles.buttonBox}>
                  <button
                    onClick={() => decrement(setCount, count, handleUpdate)}
                    className={styles.button}
                  >
                    <img alt={'Кнопка убывания товара'} src={minus} />
                  </button>
                  <span className={styles.itemAmount}>
                    {count} {count > 1 ? 'Items' : 'Item'}
                  </span>
                  <button onClick={() => increment()} className={styles.button}>
                    <img alt={'Кнопка добавления товара'} src={plus} />
                  </button>
                  {pageType === 'cart' ? (
                    <button
                      onClick={() => handleUpdate()}
                      className={styles.buttonDelete}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              </>
            ) : (
              <button
                type="button"
                onClick={() => increment()}
                className={styles.button}
              >
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
