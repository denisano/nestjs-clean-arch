import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';

@Module({
    imports: [MikroOrmModule.forRoot(), UsersModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
