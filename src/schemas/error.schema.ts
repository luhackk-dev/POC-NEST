import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseSchema {
  @ApiProperty({
    example: 400,
    description: 'HTTP status code',
  })
  statusCode: number;

  @ApiProperty({
    example: 'Bad Request',
    description: 'Error message',
  })
  message: string;

  @ApiProperty({
    example: 'BadRequestException',
    description: 'Error type',
  })
  error: string;
}

export class NotFoundErrorSchema {
  @ApiProperty({
    example: 404,
    description: 'HTTP status code',
  })
  statusCode: number;

  @ApiProperty({
    example: 'Product not found',
    description: 'Error message',
  })
  message: string;

  @ApiProperty({
    example: 'Not Found',
    description: 'Error type',
  })
  error: string;
}