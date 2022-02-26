import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SearchUsersDto } from 'src/user/application/dto/search-users.dto';
import { UserDto } from '../../application/dto/user.dto';
import { FindUsersUsecase } from '../../application/find-users.usecase';

@ApiTags('Users')
@Controller()
export class FindUsersController {
    constructor(private readonly findUsersUsecase: FindUsersUsecase) {}

    @ApiOkResponse({
        description: 'Returns list of users mathed search params.',
        type: [UserDto],
    })
    @Get('users')
    async handle(): Promise<UserDto[]> {
        const searchUsersParams = new SearchUsersDto();
        const users = await this.findUsersUsecase.execute(searchUsersParams);
        return users;
    }
}
