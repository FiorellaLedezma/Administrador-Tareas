import express from 'express';
import { getallcolab } from '../controllers/Colabcontrollers.js';

const routerc = express.Router()

//Ruta colaboradores
routerc.get('/',getallcolab)

export default routerc