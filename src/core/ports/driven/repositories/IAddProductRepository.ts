import { type Product } from '@/core/entities'

export interface IAddProductRepository {
  add: (params: Product) => Promise<void>
}
