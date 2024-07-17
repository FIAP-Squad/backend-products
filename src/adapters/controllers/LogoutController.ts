import { type ILogout, type IHTTPResponse, type IController, type IValidation } from '@/core'
import { badRequest, noContent, serverError } from '@/adapters/helpers'

export class LogoutController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _service: ILogout
  ) { }

  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { email } = request.body
      await this._service.logout(email)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
