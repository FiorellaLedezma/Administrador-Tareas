//importamos el modelo 
import tareamodel from "../models/Tareamodels.js"
import db from "../database/db.js";

/**  METODOS PARA EL CRUD */

//Mostrar todos los registros
export const getallTasks = async (req, res) => {
  try {
    const query = `
    SELECT tareas.*, colaboradores.nombre AS nombre_Colaborador, 
    estados.estado AS Estado, prioridades.prioridad AS Prioridad, 
    tareas.fecha_inicio, tareas.fecha_fin, tareas.nota FROM tareas 
    JOIN colaboradores ON tareas.id_colaborador = colaboradores.id 
    JOIN estados ON tareas.id_estado = estados.id 
    JOIN prioridades ON tareas.id_prioridad = prioridades.id 
    ORDER BY fecha_inicio ASC
    `;

    const [tareas, settareas] = await db.query(query);
    res.json(tareas)
  } catch (error) {
    res.status(500).json({
      "success": false,
      "error": {
        "code": "INTERNAL_ERROR",
        "message": "Error en la accion"
      }
    });
  }
}

//Mostrar un registro
export const getTask = async (req, res) => {
  try{
    const tarea = await tareamodel.findAll({
      where: { id: req.params.id }
    })
    res.json(tarea[0])
  
  } catch (error) {
    res.json({ message: error.message })
  }
}


//Crear un registro 
export const createTask = async (req, res) => {
  try {

    await tareamodel.create(req.body);

    res.json({
      "success": true,
      "message": "¡Tarea guardada!"
    })
  } catch (error) {
    res.status(500).json({
      "success": false,
      "error": {
        "code": "INTERNAL_ERROR",
        "message": "Error en la accion"
      }
    });
  }
}

//Actualizar un registro 
export const updateTask = async (req, res) => {
  //const{descripcion,id_colaborador,id_estado,id_prioridad,fecha_inicio,fecha_fin,nota}= req.body
  try {
    await tareamodel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({
      "success": true,
      "message": "¡Tarea actualizada!"
    })
  } catch (error) {
    res.status(500).json({
      "success": false,
      "error": {
        "code": "INTERNAL_ERROR",
        "message": "Error en la accion"
      }
    });
  }
}

//Eliminar un registro 
export const deleteTask = async (req, res) => {
  try {
    await tareamodel.destroy({
      where: { id: req.params.id }
    })
    res.json({
      "success": true,
      "message": "¡Tarea eliminada!"
    })
  } catch (error) {
    res.status(500).json({
      "success": false,
      "error": {
        "code": "INTERNAL_ERROR",
        "message": "Error en la accion"
      }
    });
  }
}
