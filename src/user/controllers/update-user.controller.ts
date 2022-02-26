import { Body, Controller, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from '../application/dto';
import { UpdateUserUsecase } from '../application/update-user.usecase';
import { User } from '../application/user.entity';

@ApiTags('Users')
@Controller()
export class UpdateUserController {
    constructor(private readonly updateUserUsecase: UpdateUserUsecase) {}

    @ApiBody({ type: UpdateUserDto })
    @ApiCreatedResponse({
        description: 'The user has been successfully updated.',
        type: User,
    })
    @Put('users/:id')
    async handle(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
        const user = await this.updateUserUsecase.execute(id, updateUserDto);

        return user;
    }
}
