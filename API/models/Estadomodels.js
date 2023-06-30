//importar la conexion
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";


//establecer la conexion 
const estmodel = db.define('estados',{
    estado: {type: DataTypes.STRING}
})

export default estmodel