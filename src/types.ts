export type Store = {
  item: Items
  filtered: Items
}

type Items = {
  item: SingleItem
}

type SingleItem = {
  map(
    arg0: (item: ItemCriteria) => import('react/jsx-runtime').JSX.Element
  ): import('react').ReactNode
}

export type ItemCriteria = {
  quantity: number
  id: number
  title: string
  thumbnail: string
  discountPercentage: string
  price: string
}
