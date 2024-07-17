import { type Payment } from '@/domain/entities'

export type UpdatePaymentParams = {
  id: string
  body: Pick<Payment, 'status'>
}

export interface IUpdatePaymentRepository {
  update: (params: UpdatePaymentParams) => Promise<void>
}
