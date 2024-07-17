import {
  noContent,
  serverError
} from '@/adapters/helpers'
import {
  type IController,
  type IHTTPResponse,
  type IDeleteProduct
} from '@/core'

export class DeleteProductController implements IController {
  constructor (private readonly _service: IDeleteProduct) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { id } = request.params
      await this._service.delete(id)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
