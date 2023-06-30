import express from "express";
import cors from 'cors'
import db from "./database/db.js";

//importacion de la ruta
import router from "./routes/Routers.js";
import routerc from "./routes/Routerscola.js";
import routere from "./routes/Routerest.js";
import routerp from "./routes/Routersprio.js";

const app = express();
const port = 3001; // Puedes cambiar el número de puerto si es necesario

app.use( cors())
app.use(express.json())

app.use('/dashboard', router)
app.use('/colaboradores', routerc)
app.use('/estado', routere)
app.use('/prioridad', routerp)


//Verificar que se conecte a la bd
try {
  await db.authenticate()
  console.log('conexion exitosa')
} catch (error) {
  console.log('error de conexion:${error}')
}


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});
