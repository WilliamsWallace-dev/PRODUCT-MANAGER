require('dotenv/config');
module.exports = {
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
    //   port: '5432',
      database: process.env.POSTGRES_DATABASE,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
  }