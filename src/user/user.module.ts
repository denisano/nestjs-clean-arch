import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CreateUserUsecase } from './application/create-user.usecase';
import { FindUsersUsecase } from './application/find-users.usecase';
import { UpdateUserUsecase } from './application/update-user.usecase';
import { CreateUserController } from './adapters/controllers/create-user.controller';
import { FindUsersController } from './adapters/controllers/find-users.controller';
import { UpdateUserController } from './adapters/controllers/update-user.controller';
import { EntityManager } from '@mikro-orm/mysql';
import { UserMikroOrmRepository } from './adapters/data/user.mikro_orm.repository';
import { UserRepository } from './application/boundaries/user.repository';
import { User } from './domain/entities/user';
import { UserMikroOrm } from './adapters/data/user.mikro_orm.entity';

@Module({
    imports: [MikroOrmModule.forFeature({ entities: [UserMikroOrm] })],
    controllers: [CreateUserController, UpdateUserController, FindUsersController],
    providers: [
        {
            provide: UserRepository,
            useFactory: (em) => new UserMikroOrmRepository(em.getRepository(UserMikroOrm)),
            inject: [EntityManager],
        },

        CreateUserUsecase,
        UpdateUserUsecase,
        FindUsersUsecase,
    ],
    exports: [],
})
export class UsersModule {}
