import { prismaClient } from '@/adapters/repositories/prismaClient'
import { type ILogErrorRepository } from '@/core/ports/driven'

export class LogRepository implements ILogErrorRepository {
  async logError (stack: string): Promise<void> {
    await prismaClient.errors.create({
      data: {
        data: stack.substring(0, 191),
        date: new Date()
      }
    })
  }
}
