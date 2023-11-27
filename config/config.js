// module.exports = {
//       dialect: 'postgres',
//       host: 'localhost',
//       port: '5432',
//       database: 'bookstore_development',
//       username: "postgres",
//       password: "wallace357",
//   }

import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err)=>{
    if(err) throw err
    console.log("Connect to PostgreSQL successfully")
})
