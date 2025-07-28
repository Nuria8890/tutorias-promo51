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

//  Pedir el listado de estudiantes filtradas por nombre

server.get("/students", async (req, res) => {
  // 1. Recojo los datos que me envía frontend
  const name = req.query.name;
  console.log("name es:", name);

  // 2. Conectarme con la db
  const connection = await getDBConnection();

  // 3. Realizo la query

  const querySQL = "SELECT * FROM students WHERE name = ?";
  const [result] = await connection.query(querySQL, [name]);
  console.log("result es:", result);
  // 4. Cerrar la conexión
  connection.end();

  // 5. Responder a frontend
  if (result.length === 0) {
    res.status(404).json({
      status: "error",
      message: "No se encuentra tu solicitud",
    });
  } else {
    res.status(201).json({
      status: "succes",
      message: result,
    });
  }
});

// Añadir una nueva alumna a mi db --> BODY PARAMS

server.post("/api/student", async (req, res) => {
  // 1. Conectarme a la db
  const connection = await getDBConnection();

  // 2. Recoger los datos de la nueva estudiante que me envía frontend
  const studentData = req.body;
  console.log("studentData es:", studentData);

  // 3. Añadir esa información que me envía frontend
  const sqlQuery =
    "INSERT INTO students (name, lastname, age, email) VALUES(?,?,?,?);";
  const [result] = await connection.query(sqlQuery, [
    studentData.name,
    studentData.lastname,
    studentData.age,
    studentData.email,
  ]);
  console.log("result es:", result);

  // 4. Desconectar la conexión con la db
  connection.end();

  // 5. Responder a frontend
  if (result.length === 0) {
    res.status(404).json({
      status: "error",
      message: "Tienes que rellenar todos los campos",
    });
  } else {
    res.status(201).json({
      status: "succes",
      message: "Se ha añadido la información",
      id: result.insertId,
    });
  }
});
