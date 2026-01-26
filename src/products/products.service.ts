import { Injectable, NotFoundException } from '@nestjs/common';
import { KnexService } from '../database/knex.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly knexService: KnexService) {}

  async findAll(): Promise<Product[]> {
    const products = await this.knexService.knex('products').select('*');
    return products.map((product) => new Product(product));
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.knexService.knex('products')
      .where({ id })
      .first();

    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }

    return new Product(product);
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const [product] = await this.knexService.knex('products')
      .insert({
        ...createProductDto,
        createdAt: new Date(),
        updatedAt: new Date(),
        yearAt: new Date(),
      })
      .returning('*');

    return new Product(product);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.knexService.knex('products')
      .where({ id })
      .first();

    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }

    const [updatedProduct] = await this.knexService.knex('products')
      .where({ id })
      .update({
        ...updateProductDto,
        updatedAt: new Date(),
      })
      .returning('*');

    return new Product(updatedProduct);
  }

  async remove(id: number): Promise<void> {
    const product = await this.knexService.knex('products')
      .where({ id })
      .first();

    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }

    await this.knexService.knex('products')
      .where({ id })
      .delete();
  }
}
