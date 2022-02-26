import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/application/dto/user.dto';
import { CreateUserUsecase } from '../../application/create-user.usecase';
import { CreateUserDto } from '../../application/dto';

@ApiTags('Users')
@Controller()
export class CreateUserController {
    constructor(private readonly createUserUsecase: CreateUserUsecase) {}

    @ApiBody({ type: CreateUserDto })
    @ApiCreatedResponse({
        description: 'The user has been successfully created.',
        type: UserDto,
    })
    @Post('users')
    async handle(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        const user = await this.createUserUsecase.execute(createUserDto);
        console.log(user);

        return user;
    }
}
