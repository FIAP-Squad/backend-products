import { type Account } from '@/core/entities'
import { type AddAccountParams } from '@/core/ports/driving/services'
import {
  type IDeleteAccessTokenRepository,
  type IAddAccountRepository,
  type ILoadAccountByEmailRepository,
  type ILoadAccountByTokenRepository,
  type IUpdateAccessTokenRepository
} from '@/core/ports/driven'
import { prismaClient } from '@/infrastructure/repositories/prismaClient'

export class AccountRepository implements
  IAddAccountRepository,
  ILoadAccountByEmailRepository,
  ILoadAccountByTokenRepository,
  IUpdateAccessTokenRepository,
  IDeleteAccessTokenRepository {
  async add (params: AddAccountParams): Promise<Account> {
    const response = await prismaClient.account.create({ data: params })
    return response
  }

  async loadByEmail (email: string): Promise<Account> {
    return await prismaClient.account.findUnique({ where: { email } })
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    await prismaClient.account.update({ where: { id }, data: { accessToken: token } })
  }

  async loadByToken (token: string, role?: string): Promise<Account> {
    return await prismaClient.account.findFirst({
      where: {
        accessToken: token,
        OR: [
          { role },
          { role: 'admin' }
        ]
      }
    })
  }

  async loadByCpf (cpf: string): Promise<Account> {
    return await prismaClient.account.findFirst({ where: { cpf } })
  }

  async deleteAccessToken (email: string): Promise<void> {
    await prismaClient.account.update({ where: { email }, data: { accessToken: null } })
  }
}
