import { type IAddOrder } from '@/core/ports/driving/services'
import { AddOrder } from '@/application/services'
import { OrderRepository } from '@/infrastructure/repositories'
import { PaymentRepository } from '@/infrastructure/repositories/PaymentRepository'

export const makeDbAddOrder = (): IAddOrder => {
  const orderRepository = new OrderRepository()
  const paymentRepository = new PaymentRepository()
  return new AddOrder(orderRepository, paymentRepository)
}
