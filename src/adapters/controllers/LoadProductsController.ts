import {
  ok,
  noContent,
  serverError
} from '@/adapters/helpers'
import {
  type IController,
  type IHTTPResponse,
  type ILoadProducts
} from '@/core'

export class LoadProductsController implements IController {
  constructor (private readonly _service: ILoadProducts) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { query } = request
      const filter = query ? { ...query } : {}
      const products = await this._service.load(filter)
      return (products.length > 0) ? ok(products) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
