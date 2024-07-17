import { type Payment } from '@/core/entities'

export interface IAddPaymentRepository {
  addPayment: (params: Payment) => Promise<void>
}
