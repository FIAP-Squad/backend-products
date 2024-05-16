import { type Product } from '@/core/entities'

export interface IAddProduct {
  add: (params: Product) => Promise<void>
}
