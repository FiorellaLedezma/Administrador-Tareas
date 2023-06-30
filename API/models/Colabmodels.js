//importar la conexion
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";


//establecer la conexion 
const colabmodel = db.define('colaboradores',{
    nombre: {type: DataTypes.STRING}
})

export default colabmodel