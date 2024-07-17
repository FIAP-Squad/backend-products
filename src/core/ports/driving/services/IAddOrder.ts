import { type OrderWithIds } from '@/domain/entities'

export interface IAddOrder {
  add: (params: OrderWithIds) => Promise<void>
}
