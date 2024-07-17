import { type WithId, type Order } from '@/domain/entities'

export interface ILoadOrdersRepository {
  loadAll: (filter: any) => Promise<Array<WithId<Order>>>
}
