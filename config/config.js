module.exports = {
      development : {
        url : process.env.POSTGRES_URL+"?sslmode=require"
      },
      production : {
        url : process.env.POSTGRES_URL+"?sslmode=require"
      }
  }

// import pg from 'pg';

// const { Pool } = pg;

// export const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// })

// pool.connect((err)=>{
//     if(err) throw err
//     console.log("Connect to PostgreSQL successfully")
// })
