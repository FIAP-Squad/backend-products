import { type WithId, type Account } from '@/domain'

export interface ILoadAccountByToken {
  load: (accessToken: string, role?: string) => Promise<WithId<Account>>
}
