import { ApiProperty } from '@nestjs/swagger';

export class SearchUsersDto {
    @ApiProperty({
        description: 'Array of user IDs',
        example: ['3422b448-2460-4fd2-9183-8000de6f8343'],
    })
    userIds?: [string];

    @ApiProperty({
        description: 'Array of user IDs to be excluded',
        example: ['3422b448-2460-4fd2-9183-8000de6f8343'],
    })
    excludeUserIds?: [string];

    @ApiProperty({
        description: 'Status of ready to play',
        example: true,
        required: false,
    })
    isReadyToPlay?: boolean;
}
