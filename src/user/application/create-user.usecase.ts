import { Injectable } from '@nestjs/common';
import { UserRepository } from './boundaries/user.repository';
import { CreateUserDto } from './dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class CreateUserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(createUserDto: CreateUserDto): Promise<UserDto> {
        const user = CreateUserDto.entityFromDto(createUserDto);

        if (user.name == null || user.name.length < 3) {
            user.name = user.email.split('@')[0];
        }

        const userCreated = await this.userRepository.save(user);

        const userDto = UserDto.dtoFromEntity(userCreated);
        return userDto;
    }
}
