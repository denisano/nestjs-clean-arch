import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../domain/entities/user';

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

    @ApiProperty({
        description: 'Is user ready to play?',
        example: true,
    })
    isReadyToPlay: boolean;

    static entityFromDto(dto: UpdateUserDto, entity?: User): User {
        entity ??= new User();
        entity.name = dto.name ?? entity.name;
        entity.email = dto.email ?? entity.email;
        entity.isReadyToPlay = dto.isReadyToPlay ?? entity.isReadyToPlay;

        return entity;
    }
}
