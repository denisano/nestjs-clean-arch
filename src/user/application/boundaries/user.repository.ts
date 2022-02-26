import { SearchUsersDto } from '../dto/search-users.dto';
import { User } from '../user.entity';

export abstract class UserRepository {
    abstract findById(id: string): Promise<User>;

    abstract findByEmail(email: string): Promise<User>;

    abstract find(searchParams: SearchUsersDto): Promise<User[]>;

    abstract save(entity: User): Promise<User>;

    abstract remove(entity: User): Promise<User>;
}
