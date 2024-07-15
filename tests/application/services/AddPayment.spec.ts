import { type Payment } from '@/core/entities'
import { AddPayment } from '@/application/services'
import { type IAddPaymentRepository } from '@/core/ports/driven'

const mockPayment = (): Payment => ({
  orderCode: 'any_order_code',
  amount: 1234,
  status: 'any_status'
})

interface SutTypes {
  sut: AddPayment
  addPaymentRepositoryStub: IAddPaymentRepository
}

const mockAddPaymentRepository = (): IAddPaymentRepository => {
  class AddPaymentRepositoryStub implements IAddPaymentRepository {
    async add (params: Payment): Promise<void> {
      return await Promise.resolve()
    }
  }
  const addPaymentRepositoryStub = new AddPaymentRepositoryStub()
  return addPaymentRepositoryStub
}

const mockSut = (): SutTypes => {
  const addPaymentRepositoryStub = mockAddPaymentRepository()
  const sut = new AddPayment(addPaymentRepositoryStub)
  return {
    sut,
    addPaymentRepositoryStub
  }
}

describe('AddPayment Usecase', () => {
  test('Should call IAddPaymentRepository usign correct values', async () => {
    const { sut, addPaymentRepositoryStub } = mockSut()
    const addSpy = jest.spyOn(addPaymentRepositoryStub, 'add')
    const addProductData = mockPayment()
    await sut.add(addProductData)
    expect(addSpy).toHaveBeenCalledWith(addProductData)
  })

  test('Shoud throw Error if repository throws', async () => {
    const { sut, addPaymentRepositoryStub } = mockSut()
    jest.spyOn(addPaymentRepositoryStub, 'add').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.add(mockPayment())
    await expect(promise).rejects.toThrow()
  })
})
