import { type OrderWithIds } from '@/domain/entities'
export interface IAddOrderRepository {
  addOrder: (params: OrderWithIds) => Promise<string>
}
