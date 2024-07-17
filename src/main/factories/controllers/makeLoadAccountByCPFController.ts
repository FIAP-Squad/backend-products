import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbLoadAccountByCpf } from '@/main/factories/usecases'
import { type IController } from '@/core/ports/driving/presentation'
import { LoadAccountByCPFController } from '@/adapters/controllers'

export const makeLoadAccountByCPFController = (): IController => {
  const controller = new LoadAccountByCPFController(makeDbLoadAccountByCpf())
  return makeLogControllerDecorator(controller)
}
