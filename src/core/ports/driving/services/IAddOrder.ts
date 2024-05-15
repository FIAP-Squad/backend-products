import { type Order } from '@/core/entities'

export interface IAddOrder {
  add: (params: Order) => Promise<void>
}
