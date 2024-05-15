import { type OrderWithIds } from '@/core/entities'

export interface IAddOrder {
  add: (params: OrderWithIds) => Promise<void>
}
