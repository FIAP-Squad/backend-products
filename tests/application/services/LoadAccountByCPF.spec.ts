import { LoadACcountByCPF } from '@/application/services'
import { type WithId, type Account } from '@/core/entities'
import { type ILoadAccountByCPFRepository } from '@/core/ports/driven'

const mockAccount = (): WithId<Account> => ({
  id: 'valid_id',
  cpf: 12345678901,
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'hashed_password'
})

const mockLoadAccountByRepositoryStub = (): ILoadAccountByCPFRepository => {
  class LoadAccountByCPFRepositoryStub implements ILoadAccountByCPFRepository {
    async loadByCpf (cpf: number): Promise<WithId<Account>> {
      return await Promise.resolve(mockAccount())
    }
  }
  return new LoadAccountByCPFRepositoryStub()
}

type SutTypes = {
  sut: LoadACcountByCPF
  loadAccountByCPFRepositoryStub: ILoadAccountByCPFRepository
}

const mockSut = (): SutTypes => {
  const loadAccountByCPFRepositoryStub = mockLoadAccountByRepositoryStub()
  const sut = new LoadACcountByCPF(loadAccountByCPFRepositoryStub)
  return {
    sut,
    loadAccountByCPFRepositoryStub
  }
}

describe('LoadACcountByCPF Usecase', () => {
  test('Should call ILoadAccountByCPFRepository with correct values', async () => {
    const { sut, loadAccountByCPFRepositoryStub } = mockSut()
    const loadByCpfStub = jest.spyOn(loadAccountByCPFRepositoryStub, 'loadByCpf')
    await sut.loadByCpf(12345678901)
    expect(loadByCpfStub).toHaveBeenCalledWith(12345678901)
  })

  test('Should thorws if ILoadAccountByCPFRepository throws', async () => {
    const { sut, loadAccountByCPFRepositoryStub } = mockSut()
    jest.spyOn(loadAccountByCPFRepositoryStub, 'loadByCpf').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.loadByCpf(12345678901)
    await expect(promise).rejects.toThrow()
  })

  test('Should return account on success', async () => {
    const { sut } = mockSut()
    const account = await sut.loadByCpf(12345678901)
    expect(account).toEqual(mockAccount())
  })
})
