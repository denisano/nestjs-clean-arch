import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CreateUserUsecase } from './application/create-user.usecase';
import { FindUsersUsecase } from './application/find-users.usecase';
import { UpdateUserUsecase } from './application/update-user.usecase';
import { User } from './application/user.entity';
import { CreateUserController } from './controllers/create-user.controller';
import { FindUsersController } from './controllers/find-users.controller';
import { UpdateUserController } from './controllers/update-user.controller';

@Module({
    imports: [MikroOrmModule.forFeature({ entities: [User] })],
    controllers: [CreateUserController, UpdateUserController, FindUsersController],
    providers: [CreateUserUsecase, UpdateUserUsecase, FindUsersUsecase],
    exports: [],
})
export class UsersModule {}
