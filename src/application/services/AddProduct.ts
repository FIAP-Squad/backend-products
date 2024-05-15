import { type Product } from '@/core/entities'
import { type IAddProduct } from '@/core/ports/driving/services'
import { type IAddProductRepository } from '@/core/ports/driven'

export class AddProduct implements IAddProduct {
  constructor (private readonly _repository: IAddProductRepository) { }
  async add (params: Product): Promise<void> {
    await this._repository.add(params)
  }
}
