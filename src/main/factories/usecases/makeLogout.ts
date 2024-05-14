import { type ILogout } from '@/core/ports/driving/services'
import { Logout } from '@/application/services'
import { AccountRepository } from '@/infrastructure/repositories'

export const makeDbLogout = (): ILogout => {
  const repository = new AccountRepository()
  return new Logout(repository)
}
