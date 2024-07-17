import {
  type IValidation,
  type IController,
  type IHTTPRequest,
  type IHTTPResponse,
  type IUpdateProduct
} from '@/core'
import { badRequest, noContent, serverError } from '@/adapters/helpers'

export class UpdateProductController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly updateProduct: IUpdateProduct
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this.validation.validate(request.body)
      if (error) return badRequest(error)
      const { body } = request
      const { id } = request.params
      await this.updateProduct.update({ id, body })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
