import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user.entity';

export class UserDto {
    @ApiProperty({
        description: 'User id (UUID v4)',
    })
    id: string;

    @ApiProperty({
        description: 'User name',
        example: 'Denis Anokhin',
    })
    name: string;

    @ApiProperty({
        description: 'User email',
        example: 'denis.anokhin@gmail.com',
    })
    email: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    static dtoFromEntity(entity: User): UserDto {
        const dto = new UserDto();
        dto.id = entity.id;
        dto.name = entity.name;
        dto.email = entity.email;
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;

        return dto;
    }
}
