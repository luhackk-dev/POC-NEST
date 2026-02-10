import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ProductResponseSchema } from '../schemas/product.schema';
import { ErrorResponseSchema, NotFoundErrorSchema } from '../schemas/error.schema';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()

  @ApiOperation({summary: 'List products'})
  @ApiResponse({
    status: 200,
    description: 'List of products retrieved successfully',
    type: ProductResponseSchema,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: ErrorResponseSchema,
  })

  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')

  @ApiOperation({summary: 'List a product by id'})
  @ApiResponse({
    status: 200,
    description: 'Product found by id',
    type: ProductResponseSchema
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
    type: NotFoundErrorSchema,
  })

  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()

  @ApiOperation({summary: "Send product to database"})
  @ApiResponse({
    status: 201,
    description: "Product sent to database",
    type: ProductResponseSchema
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: ErrorResponseSchema,
  })

  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    console.log(createProductDto);
    return this.productsService.create(createProductDto);
  }

  @Put(':id')

  @ApiOperation({summary: "Update product by id"})
  @ApiResponse({
    status: 200,
    description: "Product updated successfully",
    type: ProductResponseSchema
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: ErrorResponseSchema,
  })

  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({summary: "Delete product by id"})
  @ApiResponse({
    status: 204,
    description: "Product deleted successfully"
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
    type: NotFoundErrorSchema,
  })

  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productsService.remove(id);
  }
}
