import priomodel from "../models/Prioridadmodels.js"

export const getallpri = async (req, res) => {
    try {
      const prioridades = await priomodel.findAll()
      res.json(prioridades)
    } catch (error) {
      res.json( {message: error.message} )
    }
  }