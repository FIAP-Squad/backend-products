import { type WithId, type Account } from '@/core/entities'

export interface IAddAccount {
  add: (params: Account) => Promise<WithId<Account>>
}
