const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

// Crear el servidor
const server = express();

// Permitir que el servidor escuche peticiones
server.use(cors());

// Configurar el puerto
const port = 5000;

server.listen(port, () => {
  console.log(`Server listening at: http://localhost:${port}`);
});

// Configurar los datos con los que voy a trabajar (le digo que van a ser en formato json)
server.use(express.json());

// Conexión con la DB --> asíncrona

const getDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT,
  });
  return connection;
};

// ENDPOINTS
