import {
  type IHTTPResponse,
  type IController,
  type IValidation,
  type IAddOrder
} from '@/core'
import { badRequest, noContent, serverError } from '../helpers'

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
