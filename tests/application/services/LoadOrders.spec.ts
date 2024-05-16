import { type Order, type OrderWithIds } from '@/core/entities'
import { type ILoadOrders } from '@/core/ports/driving/services'
import { type ILoadOrdersRepository } from '@/core/ports/driven'
import { LoadOrders } from '@/application/services'

const mockOrderWithIds = (): OrderWithIds[] => ([
  {
    number: 1,
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
  },
  {
    number: 2,
    customer: 'other_customer',
    items: [
      {
        productId: 'other_product_id',
        totalItems: 2,
        unitPrice: 2000,
        amount: 4000
      }
    ],
    status: 'other_status',
    amount: 4000
  }
])

const mockOrdersRepository = (): ILoadOrdersRepository => {
  class LoadOrdersRepositoryStub implements ILoadOrdersRepository {
    async loadAll (): Promise<Order[]> {
      return await Promise.resolve(mockOrderWithIds())
    }
  }
  return new LoadOrdersRepositoryStub()
}

interface SutTypes {
  sut: ILoadOrders
  loadOrdersRepositoryStub: ILoadOrdersRepository
}

const mockSut = (): SutTypes => {
  const loadOrdersRepositoryStub = mockOrdersRepository()
  const sut = new LoadOrders(loadOrdersRepositoryStub)
  return {
    sut,
    loadOrdersRepositoryStub
  }
}

describe('ILoadOrders Usecase', () => {
  test('Should call ILoadOrdersRepository', async () => {
    const { sut, loadOrdersRepositoryStub } = mockSut()
    const loadAllSpy = jest.spyOn(loadOrdersRepositoryStub, 'loadAll')
    await sut.loadAll({})
    expect(loadAllSpy).toHaveBeenCalled()
  })

  test('Should return a list of Orders on success', async () => {
    const { sut } = mockSut()
    const orders = await sut.loadAll({})
    expect(orders).toEqual(mockOrderWithIds())
  })

  test('Should throw if ILoadOrdersRepository throws', async () => {
    const { sut, loadOrdersRepositoryStub } = mockSut()
    jest.spyOn(loadOrdersRepositoryStub, 'loadAll').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.loadAll({})
    await expect(promise).rejects.toThrow()
  })
})
