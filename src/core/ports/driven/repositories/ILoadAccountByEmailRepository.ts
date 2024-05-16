import { type WithId, type Account } from '@/core/entities'

export interface ILoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<WithId<Account>>
}
