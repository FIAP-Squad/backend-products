import { type WithId, type Order } from '@/domain/entities'
import { type ILoadOrders } from '@/core/ports/driving/services'
import { type ILoadOrdersRepository } from '@/core/ports/driven'

export class LoadOrders implements ILoadOrders {
  constructor (private readonly _repository: ILoadOrdersRepository) { }
  async loadAll (filter: any): Promise<Array<WithId<Order>>> {
    return await this._repository.loadAll(filter)
  }
}
