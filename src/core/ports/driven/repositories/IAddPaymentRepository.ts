import { type Payment } from '@/core/entities'

export interface IAddPaymentRepository {
  add: (params: Payment) => Promise<void>
}
