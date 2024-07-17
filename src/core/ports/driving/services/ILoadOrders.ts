import { type WithId, type Order } from '@/domain/entities'

export interface ILoadOrders {
  loadAll: (filter: any) => Promise<Array<WithId<Order>>>
}
