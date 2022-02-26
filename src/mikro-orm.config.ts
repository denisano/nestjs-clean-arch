import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { LoadStrategy } from '@mikro-orm/core';

const config: Options = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    dbName: 'nestjs_clean_arch',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    debug: true,
    loadStrategy: LoadStrategy.JOINED,
    metadataProvider: TsMorphMetadataProvider,
    registerRequestContext: false,
    migrations: {
        path: 'dist/migrations',
        pathTs: 'src/migrations',
    },
};

export default config;
