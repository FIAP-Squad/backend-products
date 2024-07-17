import {
  type IHTTPResponse,
  type IController,
  type IValidation,
  type IHTTPRequest,
  type IUpdateOrder
} from '@/core'
import { badRequest, noContent, serverError } from '../helpers'

export class UpdateOrderController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly updateOrder: IUpdateOrder
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this.validation.validate(request.body)
      if (error) return badRequest(error)
      const { id } = request.params
      const { status } = request.body
      await this.updateOrder.update({ id, status })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
