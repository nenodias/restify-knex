module.exports = {
  client: 'pg',
  connection: {
    host:     process.env.DB_HOST,
    host:     process.env.DB_PORT,
    database: process.env.DB_NAME,
    user:     process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  pool: {
    min: process.env.DB_POOL_MIN,
    max: process.env.DB_POOL_MAX,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  },
  useNullAsDefault: true
};
