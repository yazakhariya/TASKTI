import styles from './Products.module.css'
import UiItemCard from 'src/components/UiItemCard/UiItemCard'
import loader from 'src/assets/loader.svg'
import { useGetItemsQuery } from 'src/api/services/fetchItems'
import { useState } from 'react'
import { ItemCriteria } from 'src/types'

export default function Products() {
  const [title, setTitle] = useState<string>('')
  const [limit, setLimit] = useState<number>(12)

  const { data } = useGetItemsQuery({
    title,
    limit,
  })

  const showMoreFn = () => {
    setLimit(limit + 12)
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.contentBox}>
        <h1 className={styles.heading}>Catalog</h1>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search by title"
        />
        <div className={styles.productList}>
          {data ? (
            <>
              {data?.products.length === 0 ? (
                <h2>No data found</h2>
              ) : (
                data?.products.map((item: ItemCriteria) => {
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
                      width={370}
                      height={300}
                      quantity={0}
                    />
                  )
                })
              )}
            </>
          ) : (
            <img
              alt="Идет загрузка контента"
              width={40}
              height={40}
              src={loader}
            />
          )}
        </div>
      </div>
      {limit < data?.total ? (
        <button className={styles.button} onClick={() => showMoreFn()}>
          Show more
        </button>
      ) : null}
    </section>
  )
}
