export type StoreDefine = {
  items: ItemsState
}

export type ItemsState = {
  error: string | null | undefined
  entities: Carts
  loadingStatus: string
}

type Carts = {
  discountedTotal: number
  totalProducts: number
  products: Item[]
  total: number
  carts: Products[]
}

type Products = {
  id: number
  map(arg0: (a: import("../../types").ItemCriteria) => boolean): Item
  length: number
  discountedTotal: string
  total: number
  totalProducts: number
  products: Item[]
}

export type Item = {
  filter(arg0: (a: import("../../types").ItemCriteria) => boolean): unknown
  quantity: number
  splice(arg0: number, arg1: number): import('react').ReactNode
  map(arg0: (item: Item) => import('react/jsx-runtime').JSX.Element): Item
  discountPercentage: string
  id: number
  thumbnail: string
  title: string
  price: string
}
