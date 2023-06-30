//importamos el modelo 
import estmodel from "../models/estadomodels.js"


//Mostrar todos los colaboradores
export const getallest = async (req, res) => {
  try {
    const estados = await estmodel.findAll()
    res.json(estados)
  } catch (error) {
    res.json( {message: error.message} )
  }
}