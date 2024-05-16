import { type WithId, type Account } from '@/core/entities'

export interface ILoadAccountByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<WithId<Account>>
}
