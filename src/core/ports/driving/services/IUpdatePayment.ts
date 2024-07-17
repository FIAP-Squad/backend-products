import { type Payment } from '@/core/entities'

export type UpdatePaymentParams = {
  id: string
  body: Pick<Payment, 'status'>
}

export interface IUpdatePayment {
  update: (params: UpdatePaymentParams) => Promise<void>
}
