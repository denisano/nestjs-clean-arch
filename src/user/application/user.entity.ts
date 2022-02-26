import { Entity, EntityRepositoryType, PrimaryKey, Property } from '@mikro-orm/core';
import { UserRepository } from './user.repository';

@Entity({ customRepository: () => UserRepository })
export class User {
    [EntityRepositoryType]?: UserRepository;
    /**
     * User ID (UUID v4)
     *
     * @example '3422b448-2460-4fd2-9183-8000de6f8343'
     */
    @PrimaryKey({
        length: 36,
        nullable: false,
        comment: 'User ID (UUID v4)',
    })
    id: string;

    /**
     * User name
     */
    @Property({ length: 48, nullable: false, comment: 'User name' })
    name: string;

    /**
     * User email
     */
    @Property({ length: 128, nullable: false, comment: 'User email' })
    email: string;

    /**
     * Entity create datetime
     *
     * @example '1980-12-08T12:01:01Z'
     */
    @Property({
        onCreate: () => new Date(),
        name: 'created_at',
        nullable: false,
        comment: 'Entity create datetime',
    })
    createdAt: Date;

    /**
     * Entity update datetime
     *
     * @example '1980-12-08T12:01:01Z'
     */
    @Property({
        name: 'updated_at',
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        nullable: false,
        comment: 'Entity update datetime',
    })
    updatedAt: Date;
}
