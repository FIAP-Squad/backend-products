import { type IAddProduct } from '@/core/ports/driving/services'
import { AddProduct } from '@/usecases'
import { ProductRepository } from '@/adapters/repositories'

export const makeDbAddProduct = (): IAddProduct => {
  const repository = new ProductRepository()
  return new AddProduct(repository)
}
