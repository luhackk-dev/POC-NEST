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
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UserResponseSchema } from '../schemas/user.schema';
import { ErrorResponseSchema, NotFoundErrorSchema } from '../schemas/error.schema';


@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({summary: 'List users'})
  @ApiResponse({
    status: 200,
    description: 'List of users retrieved successfully',
    type: UserResponseSchema,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: ErrorResponseSchema,
  })

  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'List a user by id'})
  @ApiResponse({
    status: 200,
    description: 'User found by id',
    type: UserResponseSchema
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    type: NotFoundErrorSchema,
  })

  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({summary: "Send user to database"})
  @ApiResponse({
    status: 201,
    description: "User sent to database",
    type: UserResponseSchema
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: ErrorResponseSchema,
  })

  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @ApiOperation({summary: "Update user by id"})
  @ApiResponse({
    status: 200,
    description: "User updated successfully",
    type: UserResponseSchema
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: ErrorResponseSchema,
  })

  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, UpdateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary: "Delete user by id"})
  @ApiResponse({
    status: 204,
    description: "User deleted successfully"
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    type: NotFoundErrorSchema,
  })
  
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
