//importar la conexion
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";



//establecer la conexion 
const tareamodel = db.define('tareas',{
    descripcion: {type: DataTypes.STRING},
    id_colaborador: {type: DataTypes.INTEGER},
    id_estado: {type: DataTypes.INTEGER},
    id_prioridad: {type: DataTypes.INTEGER},
    fecha_inicio: {type: DataTypes.DATE},
    fecha_fin: {type: DataTypes.DATE},
    nota: {type: DataTypes.INTEGER},
})

export default tareamodel;