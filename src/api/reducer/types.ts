export type StoreDefine = {
  items: ItemsState
}

export type ItemsState = {
  error: string | null | undefined
  entities: Products
  loadingStatus: string
}

type Products = {
  discountedTotal: string
  total: string
  totalProducts: number
  products: Item[]
}

type Item = {
  splice(arg0: number, arg1: number): import('react').ReactNode
  map(arg0: (item: Item) => import('react/jsx-runtime').JSX.Element): Item
  discountPercentage: string
  id: number
  thumbnail: string
  title: string
  price: string
}
