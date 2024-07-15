import { type Payment } from '@/core/entities/Payment'
import {
  type IValidation,
  type IHTTPRequest
} from '@/core/ports/driving/presentation'
import { AddPaymentController } from '@/application/presentation/controllers'
import { type IAddPayment } from '@/core/ports/driving/services/IAddPayment'
import { badRequest } from '@/application/presentation/helpers'

const mockPayment = (): Payment => ({
  orderCode: 'any_order_code',
  amount: 1234,
  status: 'any_status'
})

const mockRequest = (): IHTTPRequest => ({
  body: mockPayment()
})

const mockValidation = (): IValidation => {
  class ValidationStub implements IValidation {
    validate (input: any): Error {
      return null
    }
  }
  const validationStub = new ValidationStub()
  return validationStub
}

const mockAddPayment = (): IAddPayment => {
  class AddPaymentStub implements IAddPayment {
    async add (data: Payment): Promise<void> {
      return await Promise.resolve()
    }
  }
  const addPaymentStub = new AddPaymentStub()
  return addPaymentStub
}

type SutTypes = {
  sut: AddPaymentController
  addPaymentStub: IAddPayment
  validationStub: IValidation
}

const mockSut = (): SutTypes => {
  const addPaymentStub = mockAddPayment()
  const validationStub = mockValidation()
  const sut = new AddPaymentController(validationStub, addPaymentStub)
  return {
    sut,
    validationStub,
    addPaymentStub
  }
}

describe('AddPaymentController', () => {
  test('Should call IValidation with correct values', async () => {
    const { sut, validationStub } = mockSut()
    const validationSpy = jest.spyOn(validationStub, 'validate')
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy).toHaveBeenCalledWith(request.body)
  })

  test('Should return 400 if validation fails', async () => {
    const { sut, validationStub } = mockSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const request = mockRequest()
    const response = await sut.handle(request)
    expect(response).toEqual(badRequest(new Error()))
  })
})
