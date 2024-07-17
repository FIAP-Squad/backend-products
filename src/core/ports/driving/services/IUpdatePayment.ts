import { type Payment } from '@/domain/entities'

export type UpdatePaymentParams = {
  id: string
  body: Pick<Payment, 'status'>
}

export interface IUpdatePayment {
  update: (params: UpdatePaymentParams) => Promise<void>
}
