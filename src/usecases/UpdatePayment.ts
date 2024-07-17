import { type IUpdatePaymentRepository } from '@/core/ports/driven'
import {
  type UpdatePaymentParams,
  type IUpdatePayment
} from '@/core/ports/driving/services'

export class UpdatePayment implements IUpdatePayment {
  constructor (private readonly _repository: IUpdatePaymentRepository) { }
  async update (params: UpdatePaymentParams): Promise<void> {
    await this._repository.update(params)
  }
}
