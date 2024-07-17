import { type IUpdateOrder } from '@/core/ports/driving/services'
import { UpdateOrder } from '@/usecases'
import { OrderRepository } from '@/adapters/repositories'

export const makeDbUpdateOrder = (): IUpdateOrder => {
  const repository = new OrderRepository()
  return new UpdateOrder(repository)
}
