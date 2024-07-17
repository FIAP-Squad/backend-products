import { type WithId, type Order } from '@/core/entities'

export interface ILoadOrders {
  loadAll: (filter: any) => Promise<Array<WithId<Order>>>
}
