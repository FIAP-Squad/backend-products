import { type ILoadProductById } from '@/core/ports/driving/services'
import { LoadProductById } from '@/application/services'
import { ProductRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbLoadProductById = (): ILoadProductById => {
  const repository = new ProductRepository()
  return new LoadProductById(repository)
}
