import { type WithId, type Order } from '@/core/entities'

export interface ILoadOrdersRepository {
  loadAll: (filter: any) => Promise<Array<WithId<Order>>>
}
