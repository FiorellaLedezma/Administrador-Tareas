import express from 'express';
import { getallpri } from '../controllers/Prioridadcontrollers.js';

const routerp = express.Router()

//Ruta colaboradores
routerp.get('/',getallpri)

export default routerp