import { type IAddOrder } from '@/core/ports/driving/services'
import { AddOrder } from '@/application/services'
import { OrderRepository } from '@/infrastructure/repositories/mysql'

export const makeDbAddOrder = (): IAddOrder => {
  const repository = new OrderRepository()
  return new AddOrder(repository)
}
