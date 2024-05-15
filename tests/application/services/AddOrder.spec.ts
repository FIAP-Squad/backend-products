import { type Order } from '@/core/entities'
import {
  type IAddOrderRepository
} from '@/core/ports/driven'
import { AddOrder } from '@/application/services'

const mockOrder = (): Order => ({
  number: 1234,
  customer: 'any_customer',
  items: [
    {
      orderId: 'any_order_id',
      totalItems: 2,
      unitPrice: 2000,
      amount: 4000
    }
  ],
  status: 'any_status',
  createdAt: new Date(),
  updatedAt: new Date(),
  amount: 4000
})

const mockAddOrderRepository = (): IAddOrderRepository => {
  class AddOrderRepositoryStub implements IAddOrderRepository {
    async addOrder (params: Order): Promise<void> {
      return await Promise.resolve(null)
    }
  }
  const addOrderRepositoryStub = new AddOrderRepositoryStub()
  return addOrderRepositoryStub
}

type SutTypes = {
  sut: AddOrder
  addOrderRepositoryStub: IAddOrderRepository
}

const mockSut = (): SutTypes => {
  const addOrderRepositoryStub = mockAddOrderRepository()
  const sut = new AddOrder(addOrderRepositoryStub)
  return {
    sut,
    addOrderRepositoryStub
  }
}

describe('AddOrder Usecase', () => {
  test('Should call IAddOrderRepository usign correct values', async () => {
    const { sut, addOrderRepositoryStub } = mockSut()
    const addSpy = jest.spyOn(addOrderRepositoryStub, 'addOrder')
    const addOrderData = mockOrder()
    await sut.add(addOrderData)
    expect(addSpy).toHaveBeenCalledWith(addOrderData)
  })

  test('Shoud throw Error if IHasher Throw Error', async () => {
    const { sut, addOrderRepositoryStub } = mockSut()
    jest.spyOn(addOrderRepositoryStub, 'addOrder').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.add(mockOrder())
    await expect(promise).rejects.toThrow()
  })
})
