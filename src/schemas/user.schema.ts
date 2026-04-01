import { ApiProperty } from '@nestjs/swagger';

export class UserResponseSchema {
  @ApiProperty({
    example: 1,
    description: 'User unique identifier',
  })
  id: number;

  @ApiProperty({
    example: 'John',
    description: 'User name',
  })
  name: string;

  @ApiProperty({
    example: 'john@email.com',
    description: 'User email',
  })
  email: string;

  @ApiProperty({
    example: '2025-01-26T10:30:00Z',
    description: 'User creation timestamp',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2025-01-26T10:30:00Z',
    description: 'User last update timestamp',
  })
  updatedAt: Date;

  @ApiProperty({
    example: '2025-01-26T10:30:00Z',
    description: 'User year timestamp',
  })
  yearAt: Date;
}