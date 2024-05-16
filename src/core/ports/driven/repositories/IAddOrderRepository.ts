import { type OrderWithIds } from '@/core/entities'
export interface IAddOrderRepository {
  addOrder: (params: OrderWithIds) => Promise<void>
}
