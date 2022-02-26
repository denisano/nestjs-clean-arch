import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UpdateUserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string, dto: UpdateUserDto): Promise<UserDto> {
        const entity = await this.userRepository.findOne(id);
        entity.name = dto.name;

        await this.userRepository.persistAndFlush(entity);

        console.log(entity);
        return UserDto.dtoFromEntity(entity);
    }
}
