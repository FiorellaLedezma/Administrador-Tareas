import { Sequelize } from "sequelize";

const db = new Sequelize('db_apptask','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db