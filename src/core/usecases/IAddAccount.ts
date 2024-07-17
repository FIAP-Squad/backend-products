import { type WithId, type Account } from '@/domain'

export interface IAddAccount {
  add: (params: Account) => Promise<WithId<Account>>
}
