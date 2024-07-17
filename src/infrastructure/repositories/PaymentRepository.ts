import { prismaClient } from '@/infrastructure/repositories/prismaClient'
import { type Payment } from '@/core/entities'
import { type IAddPaymentRepository } from '@/core/ports/driven'

export class PaymentRepository implements IAddPaymentRepository {
  async addPayment (params: Payment): Promise<void> {
    await prismaClient.payment.create({ data: params })
  }
}
