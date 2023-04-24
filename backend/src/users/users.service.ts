import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }
    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({
            id: id,
        })
    }

    async createUser(user: User) {
        this.userRepository.save(user);
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async editUser(id: number, user: User): Promise<User> {
        const editedUser = await this.userRepository.findOneBy({
            id: id,
        })
        if (!editedUser) {
            throw new NotFoundException('User is not found');
        }
        editedUser.user = user.user;
        editedUser.password = user.password;
        await editedUser.save();
        return editedUser;
    }
}