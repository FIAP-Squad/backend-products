import { type Product } from '@/domain/entities'

export interface IAddProduct {
  add: (params: Product) => Promise<void>
}
