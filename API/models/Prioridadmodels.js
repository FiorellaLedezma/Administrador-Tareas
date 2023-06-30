//importar la conexion
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";


//establecer la conexion 
const priomodel = db.define('prioridades',{
    prioridad: {type: DataTypes.STRING}
})

export default priomodel