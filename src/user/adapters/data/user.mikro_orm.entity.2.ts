// import { EntitySchema } from '@mikro-orm/core';
// import { User } from 'src/user/application/entities/user.entity';

//TODO: It would be good to have ability store entity schema in separate file. Like this:
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
