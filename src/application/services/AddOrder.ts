import { type Order } from '@/core/entities'
import { type IAddOrder } from '@/core/ports/driving/services'
import { type IAddOrderRepository } from '@/core/ports/driven'

export class AddOrder implements IAddOrder {
  constructor (private readonly _repository: IAddOrderRepository) { }
  async add (params: Order): Promise<void> {
    await this._repository.addOrder(params)
  }
}
