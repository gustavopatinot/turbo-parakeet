# turbo-parakeet
Proyecto React y JWT

Carpeta SRC/ para organizar el codigo
SRC/Routes -> los endpoints de la aplicacion
SRC/Controllers -> Las acciones que de ejecutan cuando se solicitan los endpoints
SRC/Models -> Modelos de datos {Especificacion de datos en MongoDB}
SRC/Middlewares -> Capturar por medio de funciones los accesos al sistema 
SRC/schemas -> validar datos en el backend
SRC/libs -> funciones que se pueden reutilizar en la aplicacion
db.js -> Coneccion base de datos
config.js -> configuraciones globales que los archivos pueden importar
index.js -> arranque aplicacion llama a express, base de datos, servicios
app.js -> Configurar todo el codigo del backen de express

packages
     nodemon -> reinicio del servidor automaticamente
     morgan -> log de peticiones al servidor

