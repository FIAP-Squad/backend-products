import { type IValidation } from '@/core/ports/driving/presentation'
import {
  MandatoryFieldValidation,
  ValidationComposite
} from '@/application/validation'

export const makeUpdatePaymentValidation = (): IValidation => {
  const validations: IValidation[] = []
  const fields = ['status']
  validations.push(new MandatoryFieldValidation(fields))
  return new ValidationComposite(validations)
}
