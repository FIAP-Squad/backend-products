import { type IDeleteProduct } from '@/core/ports/driving/services'
import {
  noContent,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IHTTPResponse
} from '@/core/ports/driving/presentation'

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
