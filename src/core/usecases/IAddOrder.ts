import { type OrderWithIds } from '@/domain'

export interface IAddOrder {
  add: (params: OrderWithIds) => Promise<void>
}
