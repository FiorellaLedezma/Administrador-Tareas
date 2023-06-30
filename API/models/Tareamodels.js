//importar la conexion
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";



//establecer la conexion 
const tareamodel = db.define('tareas',{
    descripcion: {type: DataTypes.STRING},
    id_colaborador: {type: DataTypes.NUMBER},
    id_estado: {type: DataTypes.NUMBER},
    id_prioridad: {type: DataTypes.NUMBER},
    fecha_inicio: {type: DataTypes.DATE},
    fecha_fin: {type: DataTypes.DATE},
    nota: {type: DataTypes.NUMBER},
})

export default tareamodel;