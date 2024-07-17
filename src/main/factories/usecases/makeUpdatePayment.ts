import { type IUpdatePayment } from '@/core/ports/driving/services'
import { PaymentRepository } from '@/adapters/repositories'
import { UpdatePayment } from '@/application/services'

export const makeUpdatePayment = (): IUpdatePayment => {
  const repository = new PaymentRepository()
  return new UpdatePayment(repository)
}
