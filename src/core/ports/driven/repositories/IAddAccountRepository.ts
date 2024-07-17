import { type WithId, type Account } from '@/domain/entities'

export interface IAddAccountRepository {
  add: (params: Account) => Promise<WithId<Account>>
}
