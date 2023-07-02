import express from 'express';
import { createTask, deleteTask,getTask, getallTasks, updateTask } from '../controllers/Tareacontrollers.js';

const router = express.Router()

// Rutas tareas
router.get('/', getallTasks)
router.get('/:id', getTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)



export default router