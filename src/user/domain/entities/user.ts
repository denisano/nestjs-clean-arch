export class User {
    /**
     * User ID (UUID v4)
     *
     * @example '3422b448-2460-4fd2-9183-8000de6f8343'
     */
    id: string;

    /**
     * User name
     */
    name: string;

    /**
     * User email
     */
    email: string;

    /**
     * Flag: User ready to play now
     *
     * @example true
     */
    isReadyToPlay: boolean;

    /**
     * Entity create datetime
     *
     * @example '1980-12-08T12:01:01Z'
     */
    createdAt: Date;

    /**
     * Entity update datetime
     *
     * @example '1980-12-08T12:01:01Z'
     */
    updatedAt: Date;
}

// export const UserSchema = new EntitySchema<User>({
//     class: User,
//     properties: {
//         id: {
//             type: 'string',
//             primary: true,
//             nullable: false,
//             length: 36,
//             comment: 'User ID (UUID v4)',
//         },
//         name: { type: 'string', nullable: false, length: 48, comment: 'User name' },
//         email: { type: 'string', nullable: false, length: 128, comment: 'User email' },
//         isReadyToPlay: {
//             type: 'boolean',
//             name: 'is_ready_to_play',
//             default: true,
//             nullable: false,
//             comment: 'Flag: User ready to play now',
//         },
//         createdAt: {
//             type: 'Date',
//             name: 'created_at',
//             nullable: false,
//             onCreate: () => new Date(),
//         },
//         updatedAt: {
//             type: 'Date',
//             name: 'updated_at',
//             nullable: false,
//             onCreate: () => new Date(),
//             onUpdate: () => new Date(),
//         },
//     },
// });
