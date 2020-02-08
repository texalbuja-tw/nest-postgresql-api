import { createConnection } from 'typeorm';
import { Photo } from './model/photo.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'postgres',
      entities: [Photo],
      synchronize: true,
    }),
  },
];