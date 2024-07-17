import { type Product } from '@/domain'

export interface ILoadProducts {
  load: (filter: any) => Promise<Product[]>
}
