import {
  type IHTTPResponse,
  type IController,
  type IValidation
} from '@/core/ports/driving/presentation'
import { badRequest, noContent, serverError } from '../helpers'
import { type IAddOrder } from '@/core/ports/driving/services/IAddOrder'

export class AddOrderController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _service: IAddOrder
  ) { }

  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      await this._service.add(request.body)
      return noContent()
    } catch (error) { return serverError(error) }
  }
}
