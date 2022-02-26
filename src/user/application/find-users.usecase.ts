import { Injectable } from '@nestjs/common';
import { UserRepository } from './boundaries/user.repository';
import { SearchUsersDto } from './dto/search-users.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class FindUsersUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(searchParams: SearchUsersDto): Promise<UserDto[]> {
        const users = await this.userRepository.find(searchParams);

        const usersDtos = users.map(UserDto.dtoFromEntity);

        return usersDtos;
    }
}
