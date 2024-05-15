import { type WithId, type Account } from '@/core/entities'
import { type ILoadAccountByCPF } from '@/core/ports/driving/services'
import { type ILoadAccountByCPFRepository } from '@/core/ports/driven'
export class LoadACcountByCPF implements ILoadAccountByCPF {
  constructor (private readonly _repository: ILoadAccountByCPFRepository) { }
  async loadByCpf (cpf: number): Promise<WithId<Account>> {
    return await this._repository.loadByCpf(cpf)
  }
}
