import styles from './Products.module.css'
import UiItemCard from 'src/components/UiItemCard/UiItemCard'
import loader from 'src/assets/loader.svg'
import { useGetItemsQuery } from 'src/api/services/fetchItems'
import { useState } from 'react'
import { ItemCriteria } from 'src/types'
import { useSelector } from 'react-redux'
import { StoreDefine } from 'src/api/reducer/types'

export default function Products() {
  const [title, setTitle] = useState<string>('')
  const [limit, setLimit] = useState<number>(12)
  const itemsList = useSelector((store: StoreDefine) => store.items)

  const { data } = useGetItemsQuery({
    title,
    limit,
  })

  function showMoreFn() {
    setLimit(limit + 12)
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.contentBox}>
        <h2 className={styles.heading}>Catalog</h2>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search by title"
        />
        <div className={styles.productList}>
          {data ? (
            <>
              {data?.products?.length === 0 ? (
                <h2>No data found</h2>
              ) : (
                data?.products
                  .map((item: ItemCriteria) => {
                    let x
                    if (data) {
                      x = itemsList?.entities?.products?.filter(
                        (a: ItemCriteria) => a.id === item.id
                      )
                    }

                    return (
                      <UiItemCard
                        key={item.id}
                        id={item.id}
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
                        quantity={x?.length > 0 ? x[0].quantity : 0}
                      />
                    )
                  })
                  .slice(0, limit)
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
        <button className={styles.button} onClick={showMoreFn}>
          Show more
        </button>
      ) : null}
    </section>
  )
}
