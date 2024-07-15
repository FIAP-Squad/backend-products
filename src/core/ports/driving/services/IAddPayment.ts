import { type Payment } from '@/core/entities/Payment'

export interface IAddPayment {
  add: (data: Payment) => Promise<void>
}
