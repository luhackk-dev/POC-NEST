import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { productsMock } from './mock/products.mock';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [...productsMock];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }

    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const newId = this.generateId();
    const now = new Date();

    const newProduct = new Product({
      id: newId,
      ...createProductDto,
      createdAt: now,
      updatedAt: now,
    });

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    const productIndex = this.products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }

    const updatedProduct = new Product({
      ...this.products[productIndex],
      ...updateProductDto,
      updatedAt: new Date(),
    });

    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  remove(id: number): void {
    const productIndex = this.products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }

    this.products.splice(productIndex, 1);
  }

  private generateId(): number {
    const maxId = this.products.reduce(
      (max, p) => (p.id > max ? p.id : max),
      0,
    );
    return maxId + 1;
  }
}
