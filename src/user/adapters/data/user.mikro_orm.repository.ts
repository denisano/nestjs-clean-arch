import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserRepository } from '../../application/boundaries/user.repository';
import { SearchUsersDto } from '../../application/dto/search-users.dto';
import { User } from '../../domain/entities/user';

import { UserMikroOrm } from './user.mikro_orm.entity';

export class UserMikroOrmRepository extends UserRepository {
    constructor(
        @InjectRepository(UserMikroOrm)
        private readonly ormRepo: EntityRepository<UserMikroOrm>,
    ) {
        super();
    }

    async findById(id: string): Promise<User> {
        return (await this.ormRepo.findOne(id)).toDomainEntity();
    }

    async findByEmail(email: string): Promise<User> {
        return (await this.ormRepo.findOne({ email: email })).toDomainEntity();
    }

    async find(searchParams: SearchUsersDto): Promise<User[]> {
        const qb = this.ormRepo.createQueryBuilder();

        if (searchParams.userIds) {
            qb.andWhere({ id: searchParams.userIds });
        }

        if (searchParams.excludeUserIds) {
            qb.andWhere({ id: { $nin: searchParams.excludeUserIds } });
        }

        if (searchParams.isReadyToPlay) {
            qb.andWhere({ isReadyToPlay: searchParams.isReadyToPlay });
        }

        qb.orderBy({ createdAt: 'desc' });

        const items = (await qb.getResultList()).map((e) => e.toDomainEntity());

        return items;
    }

    async save(entity: User): Promise<User> {
        const entityOrm = UserMikroOrm.fromDomainEntity(entity);
        await this.ormRepo.persistAndFlush(entityOrm);
        const entityRes = entityOrm.toDomainEntity();
        return entityRes;
    }

    async remove(entity: User): Promise<User> {
        const entityOrm = UserMikroOrm.fromDomainEntity(entity);
        await this.ormRepo.removeAndFlush(entityOrm);
        const entityRes = entityOrm.toDomainEntity();
        return entityRes;
    }
}
