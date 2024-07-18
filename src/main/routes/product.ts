import { type Router } from 'express'
import { adaptRoute } from '@/main/frameworks'
import {
  makeAddProductController,
  makeLoadProductsController,
  makeDeleteProductController,
  makeUpdateProductController
} from '@/main/factories/controllers'

export const product = (router: Router): void => {
  router.get('/products', adaptRoute(makeLoadProductsController()))
  router.post('/products', adaptRoute(makeAddProductController()))
  router.delete('/products/:id', adaptRoute(makeDeleteProductController()))
  router.patch('/products/:id', adaptRoute(makeUpdateProductController()))
}
