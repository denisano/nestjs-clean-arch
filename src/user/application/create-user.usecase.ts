import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class CreateUserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(dto: CreateUserDto): Promise<UserDto> {
        const entity = new User();
        entity.id = uuidv4();
        entity.name = dto.name;
        entity.email = dto.email;

        const entity2 = await this.userRepository.persistAndFlush(entity).then(() => entity);
        console.log(entity2);

        await this.userRepository.persistAndFlush(entity);
        console.log(entity);
        return UserDto.dtoFromEntity(entity);
    }
}
