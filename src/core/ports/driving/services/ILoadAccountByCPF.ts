import { type WithId, type Account } from '@/domain/entities'

export interface ILoadAccountByCPF {
  loadByCpf: (cpf: string) => Promise<WithId<Account>>
}
