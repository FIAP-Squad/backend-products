import { type WithId, type Account } from '@/core/entities'

export interface IAddAccountRepository {
  add: (params: Account) => Promise<WithId<Account>>
}
