module.exports = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  // migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  entities: [__dirname + '/'],
  synchronize: true,
};
