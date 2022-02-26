import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUsecase } from '../application/create-user.usecase';
import { CreateUserDto } from '../application/dto';
import { User } from '../application/user.entity';

@ApiTags('Users')
@Controller()
export class CreateUserController {
    constructor(private readonly createUserUsecase: CreateUserUsecase) {}

    @ApiBody({ type: CreateUserDto })
    @ApiCreatedResponse({
        description: 'The user has been successfully created.',
        type: User,
    })
    @Post('users')
    async handle(@Body() createUserDto: CreateUserDto): Promise<User> {
        const user = await this.createUserUsecase.execute(createUserDto);

        return user;
    }
}
