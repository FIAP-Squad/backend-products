import { type WithId, type Account } from '@/domain/entities'

export interface ILoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<WithId<Account>>
}
