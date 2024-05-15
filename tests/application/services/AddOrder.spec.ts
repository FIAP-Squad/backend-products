import { type OrderWithIds } from '@/core/entities'
import {
  type IAddOrderRepository
} from '@/core/ports/driven'
import { AddOrder } from '@/application/services'

const mockOrderWithIds = (): OrderWithIds => ({
  number: 1234,
  customer: 'any_customer',
  items: [
    {
      productId: 'any_product_id',
      totalItems: 2,
      unitPrice: 2000,
      amount: 4000
    }
  ],
  status: 'any_status',
  amount: 4000
})

const mockAddOrderRepository = (): IAddOrderRepository => {
  class AddOrderRepositoryStub implements IAddOrderRepository {
    async addOrder (params: OrderWithIds): Promise<void> {
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
    const addOrderData = mockOrderWithIds()
    await sut.add(addOrderData)
    expect(addSpy).toHaveBeenCalledWith(addOrderData)
  })

  test('Shoud throw Error if IHasher Throw Error', async () => {
    const { sut, addOrderRepositoryStub } = mockSut()
    jest.spyOn(addOrderRepositoryStub, 'addOrder').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.add(mockOrderWithIds())
    await expect(promise).rejects.toThrow()
  })
})
