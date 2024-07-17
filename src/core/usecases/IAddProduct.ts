import { type Product } from '@/domain'

export interface IAddProduct {
  add: (params: Product) => Promise<void>
}
