import {
  ok,
  notFound,
  serverError
} from '@/adapters/helpers'
import {
  type IController,
  type IHTTPResponse,
  type ILoadAccountByCPF
} from '@/core'

export class LoadAccountByCPFController implements IController {
  constructor (private readonly _service: ILoadAccountByCPF) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { cpf } = request.params
      const account = await this._service.loadByCpf(cpf)
      if (!account) return notFound()
      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
