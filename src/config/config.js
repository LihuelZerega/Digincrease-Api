module.exports = {
    development: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: 'postgres',
    },
    production: {
      use_env_variable: 'DATABASE_URL',
      dialect: 'postgres',
    },
  };
  