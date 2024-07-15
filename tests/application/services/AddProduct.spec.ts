import { type Product } from '@/core/entities'
import { AddProduct } from '@/application/services'
import { type IAddProductRepository } from '@/core/ports/driven'

const mockProduct = (): Product => ({
  category: 'any_category',
  name: 'any_name',
  price: 1234,
  description: 'any_description',
  image: 'any_image'
})

interface SutTypes {
  sut: AddProduct
  addProductRepositoryStub: IAddProductRepository
}

const mockAddProductRepository = (): IAddProductRepository => {
  class AddProductRepositoryStub implements IAddProductRepository {
    async add (params: Product): Promise<void> {
      return await Promise.resolve()
    }
  }
  const addProductRepositoryStub = new AddProductRepositoryStub()
  return addProductRepositoryStub
}

const mockSut = (): SutTypes => {
  const addProductRepositoryStub = mockAddProductRepository()
  const sut = new AddProduct(addProductRepositoryStub)
  return {
    sut,
    addProductRepositoryStub
  }
}

describe('AddProduct Usecase', () => {
  test('Should call IAddProductRepository usign correct values', async () => {
    const { sut, addProductRepositoryStub } = mockSut()
    const addSpy = jest.spyOn(addProductRepositoryStub, 'add')
    const addProductData = mockProduct()
    await sut.add(addProductData)
    expect(addSpy).toHaveBeenCalledWith(addProductData)
  })

  test('Shoud throw Error if repository throws', async () => {
    const { sut, addProductRepositoryStub } = mockSut()
    jest.spyOn(addProductRepositoryStub, 'add').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.add(mockProduct())
    await expect(promise).rejects.toThrow()
  })
})
