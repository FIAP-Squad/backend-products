import { type WithId, type Account } from '@/domain/entities'

export interface ILoadAccountByCPFRepository {
  loadByCpf: (cpf: string) => Promise<WithId<Account>>
}
