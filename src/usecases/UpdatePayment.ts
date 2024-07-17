import {
  type UpdatePaymentParams,
  type IUpdatePayment,
  type IUpdatePaymentRepository
} from '@/core'

export class UpdatePayment implements IUpdatePayment {
  constructor (private readonly _repository: IUpdatePaymentRepository) { }
  async update (params: UpdatePaymentParams): Promise<void> {
    await this._repository.update(params)
  }
}
