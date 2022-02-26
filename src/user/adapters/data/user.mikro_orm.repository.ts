import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserRepository } from 'src/user/application/boundaries/user.repository';
import { SearchUsersDto } from 'src/user/application/dto/search-users.dto';
import { User } from 'src/user/application/user.entity';
import { v4 as uuidv4 } from 'uuid';

export class UserMikroOrmRepository extends UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly ormRepo: EntityRepository<User>,
    ) {
        super();
    }

    findById(id: string): Promise<User> {
        return this.ormRepo.findOne(id);
    }

    findByEmail(email: string): Promise<User> {
        return this.ormRepo.findOne({ email: email });
    }

    find(searchParams: SearchUsersDto): Promise<User[]> {
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

        const items = qb.getResultList();

        return items;
    }

    save(entity: User): Promise<User> {
        return this.ormRepo.persistAndFlush(entity).then(() => entity);
    }

    async remove(entity: User): Promise<User> {
        return this.ormRepo.removeAndFlush(entity).then(() => entity);
    }
}
