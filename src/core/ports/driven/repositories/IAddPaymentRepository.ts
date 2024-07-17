import { type Payment } from '@/domain/entities'

export interface IAddPaymentRepository {
  addPayment: (params: Payment) => Promise<void>
}
