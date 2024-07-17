import { type WithId, type Account } from '@/domain/entities'

export interface IAddAccount {
  add: (params: Account) => Promise<WithId<Account>>
}
