import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class FindUsersUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(): Promise<UserDto[]> {
        const users = await this.userRepository.findAll();
        return users.map(UserDto.dtoFromEntity);
    }
}
