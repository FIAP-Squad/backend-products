import { type Product } from '@/domain/entities'

export interface IAddProductRepository {
  add: (params: Product) => Promise<void>
}
