import { type OrderWithIds } from '@/core/entities'
import { type IAddOrder } from '@/core/ports/driving/services'
import {
  type IAddPaymentRepository,
  type IAddOrderRepository
} from '@/core/ports/driven'

export class AddOrder implements IAddOrder {
  constructor (
    private readonly _orderRepository: IAddOrderRepository,
    private readonly _paymentRepository: IAddPaymentRepository
  ) { }

  async add (params: OrderWithIds): Promise<void> {
    const orderId = await this._orderRepository.addOrder(params)
    const { payment } = params
    payment.orderId = orderId
    await this._paymentRepository.addPayment(payment)
  }
}
