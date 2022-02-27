import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from '../../domain/entities/user';

export class CreateUserDto {
    @ApiProperty({
        description: 'User name',
        example: 'Denis Anokhin',
    })
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: 'User email',
        example: 'denis.anokhin@gmail.com',
    })
    @IsNotEmpty()
    readonly email: string;

    static entityFromDto(dto: CreateUserDto): User {
        const entity = new User();
        entity.name = dto.name;
        entity.email = dto.email;

        return entity;
    }
}
