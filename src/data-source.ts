import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: [User],
});

// AppDataSource.initialize()
//   .then(() => {
//     console.log('data-source.ts inicializado. ;)');
//   })
//   .catch((error) => console.log(error));
