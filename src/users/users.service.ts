import { Injectable, NotFoundException } from '@nestjs/common';
import { KnexService } from '../database/knex.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly knexService: KnexService) {}

  async findAll(): Promise<User[]> {
    const users = await this.knexService.knex('users').select('*');
    return users.map((user) => new User(user));
  }

  async findOne(id: number): Promise<User> {
    const user = await this.knexService.knex('users')
      .where({ id })
      .first();

    if (!user) {
      throw new NotFoundException(`User com ID ${id} não encontrado`);
    }

    return new User(user);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const [user] = await this.knexService.knex('users')
      .insert({
        ...createUserDto,
        created_at: new Date(),
        updated_at: new Date(),
      })
      .returning('*');

    return new User(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.knexService.knex('users')
      .where({ id })
      .first();

    if (!user) {
      throw new NotFoundException(`User com ID ${id} não encontrado`);
    }

    const [updatedUser] = await this.knexService.knex('users')
      .where({ id })
      .update({
        ...updateUserDto,
        updated_at: new Date(),
      })
      .returning('*');

    return new User(updatedUser);
  }

  async remove(id: number): Promise<void> {
    const user = await this.knexService.knex('users')
      .where({ id })
      .first();

    if (!user) {
      throw new NotFoundException(`User com ID ${id} não encontrado`);
    }

    await this.knexService.knex('users')
      .where({ id })
      .delete();
  }
}
