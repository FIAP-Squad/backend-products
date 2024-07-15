import {
  type IController,
  type IValidation,
  type IHTTPRequest,
  type IHTTPResponse
} from '@/core/ports/driving/presentation'
import { badRequest, serverError } from '@/application/presentation/helpers'
import { type IAddPayment } from '@/core/ports/driving/services/IAddPayment'

export class AddPaymentController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _service: IAddPayment
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { orderCode, amount, status } = request.body
      await this._service.add({ orderCode, amount, status })
    } catch (error) {
      return serverError(error)
    }
  }
}
