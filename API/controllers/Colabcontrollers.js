//importamos el modelo 
import colabmodel from "../models/Colabmodels.js"


//Mostrar todos los colaboradores
export const getallcolab = async (req, res) => {
  try {
    const colab = await colabmodel.findAll()
    res.json(colab)
  } catch (error) {
    res.json( {message: error.message} )
  }
}

 