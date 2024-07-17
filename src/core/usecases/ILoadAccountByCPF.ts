import { type WithId, type Account } from '@/domain'

export interface ILoadAccountByCPF {
  loadByCpf: (cpf: string) => Promise<WithId<Account>>
}
