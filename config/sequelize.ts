import {Sequelize} from "sequelize"
const sequelize = require("../config/config.js")

export const database = new Sequelize({
    ...sequelize,
    define : {
        underscored : true
    }
})