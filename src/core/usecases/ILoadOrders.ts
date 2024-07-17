import { type WithId, type Order } from '@/domain'

export interface ILoadOrders {
  loadAll: (filter: any) => Promise<Array<WithId<Order>>>
}
