import { type Payment } from '@/core/entities'
import { type IAddPayment } from '@/core/ports/driving/services'
import { type IAddPaymentRepository } from '@/core/ports/driven/repositories'

export class AddPayment implements IAddPayment {
  constructor (private readonly _repository: IAddPaymentRepository) { }
  async add (params: Payment): Promise<void> {
    await this._repository.add(params)
  }
}
