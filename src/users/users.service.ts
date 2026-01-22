import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { usersMock } from './mock/user.mock';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-product.dto';

@Injectable()
export class UsersService {
  private users: User[] = [...usersMock];

  findAll(): User[] {
    return this.users;
  }

  // Its a lambda expression?
  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User ID ${id} was not found`);
    }

    return user;
  }

  create(dto: CreateUserDto): User {
    const newUser: User = {
      id: this.generateId(),
      name: dto.name,
      email: dto.email,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User ID ${id} was not found`);
    }

    const updatedUser: User = {
      ...this.users[userIndex],
      ...updateUserDto,
    };

    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: number): void {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User ID ${id} was not found`);
    }

    this.users.splice(userIndex, 1);
  }

  private generateId(): number {
    const maxId = this.users.reduce((max, user) => (user.id > max ? user.id : max), 0);
    return maxId + 1;
  }
}
