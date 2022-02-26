import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './boundaries/user.repository';
import { UpdateUserDto } from './dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UpdateUserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
        let user = await this.userRepository.findById(id);
        if (user == null) {
            //TODO: it is infrastructure layer class, not application. Fix it.
            throw new NotFoundException(`User ${id} Not Found`);
        }

        const userFromDto = UpdateUserDto.entityFromDto(updateUserDto, user);
        user = await this.userRepository.save(userFromDto);

        const userDto = UserDto.dtoFromEntity(user);
        return userDto;
    }
}
