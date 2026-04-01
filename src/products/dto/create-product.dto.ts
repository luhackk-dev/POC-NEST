import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

  @ApiProperty({example: "Notebook"})
  name: string;

  @ApiProperty({example: "versatile tool for writing, note-taking, and organizing thoughts"})
  description: string;

  @ApiProperty ({example: 2500})
  price: number;

  @ApiProperty ({example: 10})
  quantity: number;
}
