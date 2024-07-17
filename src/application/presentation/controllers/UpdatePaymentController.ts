import {
  type IHTTPRequest,
  type IHTTPResponse,
  type IController,
  type IValidation
} from '@/core/ports/driving/presentation'
import { badRequest, noContent, serverError } from '@/application/presentation/helpers'
import { type IUpdatePayment } from '@/core/ports/driving/services'

export class UpdatePaymentController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _updatePayment: IUpdatePayment
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { body } = request
      const { id } = request.params
      await this._updatePayment.update({ id, body })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
