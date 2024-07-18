import { type Express, Router } from 'express'
import { product, health } from '@/main/routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  product(router)
  health(router)
}
