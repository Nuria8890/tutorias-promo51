## Configurar proyecto para crear un servidor

1. `npm init`: iniciar nuevo proyecto de node
2. `npm install express`: librería con paquetes que me facilitan la vida para la configuración del servidor
3. `npm install cors`: librería que sirve para que todo el mundo pueda hacer peticiones a mi servidor
4. `npm install -g nodemon`: se instala para no tener que estar levantando el servidor cada vez que hago un cambio
5. añadir scripts en el package.json:
   "start": "node src/index.js"
   "dev": "nodemon src/index.js"
   <!-- Si no funciona nodemon, se puede utilizar este comando:
    "dev": "node --watch src/index.js"
    -->
6. `npm install dotenv`: para poder usar variables de entorno
7. `npm install mysql2`: para poder conectar el servidor con la db

## Configurar servidor

1. Importar las librerías

```javascript
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();
```

2. Crear el servidor web

```javascript
const server = express();
```

3. Permitir que el servidor escuche peticiones

```javascript
server.use(cors());
```

4. Establecer el puerto de conexión

```javascript
const port = 5000;

server.listen(port, () => {
  console.log(`Server listening at: http://localhost:${port}`);
});
```

5. Configurar los datos con los que voy a trabajar: le digo que van a ser en formato json

```javascript
server.use(express.json());
```

## Servir ficheros estáticos

1. Añado a mi proyecto los ficheros estáticos que quiero mostrar (creo una carpeta web, y dentro un index.html)

2. Defino la ruta donde están alojados mis ficheros estáticos

```javascript
const staticServerPath = "./web";
server.use(express.static(staticServerPath));
```
