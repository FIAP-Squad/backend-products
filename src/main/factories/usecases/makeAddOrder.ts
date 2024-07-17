import { OrderRepository, PaymentRepository } from '@/adapters/repositories'
import { type IAddOrder } from '@/core/ports/driving/services'
import { AddOrder } from '@/application/services'

export const makeDbAddOrder = (): IAddOrder => {
  const orderRepository = new OrderRepository()
  const paymentRepository = new PaymentRepository()
  return new AddOrder(orderRepository, paymentRepository)
}
