import express from 'express';
import { getallest } from '../controllers/Estadocontrollers.js';

const routere = express.Router()

//Ruta colaboradores
routere.get('/',getallest)

export default routere