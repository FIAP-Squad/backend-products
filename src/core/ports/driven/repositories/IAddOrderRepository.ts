import { type Order } from '@/core/entities'
export interface IAddOrderRepository {
  addOrder: (params: Order) => Promise<void>
}
