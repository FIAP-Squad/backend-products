import { type IUpdateProduct } from '@/core/ports/driving/services'
import { UpdateProduct } from '@/application/services'
import { ProductRepository } from '@/infrastructure/repositories/mysql'

export const makeDbUpdateProduct = (): IUpdateProduct => {
  const repository = new ProductRepository()
  return new UpdateProduct(repository)
}
