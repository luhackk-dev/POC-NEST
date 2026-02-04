import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {

  @ApiProperty({example: "João"})
  name?: string;

  @ApiProperty({example: "joaoemail@gmail.com"})
  email?: string;
}
