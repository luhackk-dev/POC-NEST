import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseSchema {
  @ApiProperty({
    example: 1,
    description: 'Product unique identifier',
  })
  id: number;

  @ApiProperty({
    example: 'Notebook',
    description: 'Product name',
  })
  name: string;

  @ApiProperty({
    example: 'versatile tool for writing, note-taking, and organizing thoughts',
    description: 'Product description',
  })
  description: string;

  @ApiProperty({
    example: 2500,
    description: 'Product price in cents',
  })
  price: number;

  @ApiProperty({
    example: 10,
    description: 'Product quantity in stock',
  })
  quantity: number;

  @ApiProperty({
    example: '2025-01-26T10:30:00Z',
    description: 'Product creation timestamp',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2025-01-26T10:30:00Z',
    description: 'Product last update timestamp',
  })
  updatedAt: Date;

  @ApiProperty({
    example: '2025-01-26T10:30:00Z',
    description: 'Product year timestamp',
  })
  yearAt: Date;
}