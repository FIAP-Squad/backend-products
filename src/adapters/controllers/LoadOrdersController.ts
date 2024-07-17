import {
  type IHTTPResponse,
  type IController,
  type ILoadOrders
} from '@/core'
import { noContent, ok, serverError } from '@/adapters/helpers'

export class LoadOrdersController implements IController {
  constructor (private readonly _service: ILoadOrders) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { query } = request
      const filter = query ? { ...query } : {}
      const orders = await this._service.loadAll(filter)
      return (orders.length > 0) ? ok(orders) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
