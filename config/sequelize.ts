import {Sequelize} from "sequelize"
const sequelize = require("../config/config.js")

// @ts-ignore
export const database = new Sequelize(process.env.POSTGRES_URL || "postgres://default:5CWGoBFAj8RD@ep-super-water-98411280-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb" + "?sslmode=require",{
    define : {
        underscored : true
    }
})