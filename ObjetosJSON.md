# Estructura de objetos JSON para las respuestas del API

> El objeto ```res``` se establece para enviar la respuesta al cliente por medio de objetos JSON

### Respuesta exitosa 
```
  res.json({
      "success": true,
      "data": {tareas},
      "message": "¡Tarea guardada!"
    })
```
> El valor de la propiedad ```"success": true``` se establece true para que indique que la operación realizada ha sido exitosa

> El valor de la propiedad ```"data": {tareas}``` se establece la variable tarea para que contenga los datos de las tareas de ser necesario enviar datos

> El valor de la propiedad ```"message": "¡Tarea guardada!"``` envia un mensaje que informa que el resultado de la operacion fue exitosa 
***
### Respuesta de error
```
res.status(500).json({
      "success": false,
      "error": {
        "code": "INTERNAL_ERROR",
        "message": "Error en la accion"
      }
    });
```

> Se configura con un código de estado HTTP ```500 (Internal Server Error) ``` utilizando el método ```status(500)```.

> El valor de la propiedad ```"error": {"code": "INTERNAL_ERROR", "message": "Error en la accion"}``` se establece ```"code:``` para que proporsione un codigo en especifico y ``` "message": "Error en la accion"``` para que brinde un mensaje descriptivo del error encontrado.