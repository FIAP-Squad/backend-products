import { type IDeleteProduct, type IDeleteProductRepository } from '@/core'

export class DeleteProduct implements IDeleteProduct {
  constructor (private readonly _repository: IDeleteProductRepository) { }
  async delete (id: string): Promise<void> {
    await this._repository.delete(id)
  }
}
