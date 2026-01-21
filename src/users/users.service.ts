import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { usersMock } from "./mock/user.mock";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-product.dto";
import { productsMock } from "src/products/mock/products.mock";
import { Product } from "src/products/entities/product.entity";

@Injectable()
export class UsersService {
    private users: User[] = [...usersMock];

    findAll(): User[] {
        return this.users;
    }

// Its a lambda expression?
    findOne(id: number): User {
        const user = this.users.find((p) => p.id === id);
        
        if (!user) {
            throw new NotFoundException(`Product ID ${id} was not found`);
        }

        return user;
    }

    create(dto: CreateUserDto): User{
        const newUser: User = {
            id: this.generateId(),
            name: dto.name,
            email: dto.email
        }

        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUserDto: UpdateUserDto): User {
        const userIndex = this.users.findIndex((p) => p.id === id);
    
        if (userIndex === -1) {
            throw new NotFoundException(`Product ID ${id} was not found`);
        };

// Why here "new" isn't work??

          const updatedUser: User = {
        ...this.users[userIndex],
        ...updateUserDto
    };

    this.users[userIndex] = updatedUser;
    return updatedUser;
    }

    private generateId(): number {
        const maxId = this.users.reduce(
            (max, p) => (p.id > max ? p.id : max),
            0,
        );
        return maxId + 1;
    }
}