import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user.entity';

export class UpdateUserDto {
    @ApiProperty({
        description: 'User name',
        example: 'Denis Anokhin',
    })
    readonly name: string;

    @ApiProperty({
        description: 'User name',
        example: 'Denis Anokhin',
    })
    readonly email: string;

    static entityFromDto(dto: UpdateUserDto, entity?: User): User {
        entity ??= new User();
        entity.name = dto.name ?? entity.name;
        entity.email = dto.email ?? entity.email;

        return entity;
    }
}
