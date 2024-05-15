import { type WithId, type Account } from '@/core/entities'

export interface ILoadAccountByCPFRepository {
  loadByCpf: (cpf: number) => Promise<WithId<Account>>
}
