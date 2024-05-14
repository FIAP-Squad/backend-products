import { prismaClient } from '@/infrastructure/repositories/prismaClient'
import { type Product } from '@/core/entities'
import { type AddProductParams } from '@/core/ports/driving/services'
import {
  type IAddProductRepository,
  type ILoadProductByIdRepository,
  type ILoadProductsRepository,
  type IDeleteProductRepository,
  type IUpdateProductRepository,
  type UpdateProductParams
} from '@/core/ports/driven'

export class ProductRepository implements
  IAddProductRepository,
  ILoadProductsRepository,
  ILoadProductByIdRepository,
  IDeleteProductRepository,
  IUpdateProductRepository {
  async add (params: AddProductParams): Promise<void> {
    await prismaClient.product.create({ data: params })
  }

  async loadAll (filter: any): Promise<Product[]> {
    return await prismaClient.product.findMany({ where: filter })
  }

  async loadById (id: string): Promise<Product | null> {
    return await prismaClient.product.findUnique({ where: { id } })
  }

  async delete (id: string): Promise<void> {
    await prismaClient.product.delete({ where: { id } })
  }

  async update (params: UpdateProductParams): Promise<void> {
    const { id, body } = params
    await prismaClient.product.update({ where: { id }, data: { ...body } })
  }
}
