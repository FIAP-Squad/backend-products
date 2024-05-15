import { prismaClient } from '@/infrastructure/repositories/prismaClient'
import { type Order } from '@/core/entities'
import {
  type UpdateOrderParams
} from '@/core/ports/driving/services'
import {
  type IUpdateOrderRepository,
  type IAddOrderRepository,
  type ILoadOrdersRepository
} from '@/core/ports/driven'

export class OrderRepository implements IAddOrderRepository, IUpdateOrderRepository, ILoadOrdersRepository {
  async addOrder (params: Order): Promise<void> {
    return await prismaClient.$transaction(async prisma => {
      const { items, ...order } = params
      const insertedOrder = await prisma.order.create({ data: order })
      await Promise.all(
        items.map(async item =>
          await prisma.orderItems.create({ data: { orderId: insertedOrder.id, ...item } })
        )
      )
    })
  }

  async updateOrder (params: UpdateOrderParams): Promise<void> {
    const { id, status } = params
    await prismaClient.order.update({ where: { id }, data: { status } })
  }

  async loadAll (filter: any): Promise<Order[]> {
    return await prismaClient.order.findMany({
      where: filter,
      select: {
        id: false,
        number: true,
        customer: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        items: {
          select: {
            id: true,
            amount: true,
            orderId: true,
            totalItems: true,
            unitPrice: true
          }
        }
      }
    })
  }
}
