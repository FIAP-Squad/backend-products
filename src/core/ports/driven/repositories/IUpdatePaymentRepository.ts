import { type Payment } from '@/core/entities'

export type UpdatePaymentParams = {
  id: string
  body: Partial<Payment>
}

export interface IUpdatePaymentRepository {
  update: (params: UpdatePaymentParams) => Promise<void>
}
