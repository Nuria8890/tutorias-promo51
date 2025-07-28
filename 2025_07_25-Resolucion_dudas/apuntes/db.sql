CREATE DATABASE adalab_tutoria;

USE adalab_tutoria;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    lastname VARCHAR(100),
    age INT,
    email VARCHAR(100) UNIQUE
);

INSERT INTO students (name, lastname, age, email)
VALUES
('María', 'Pérez', 20, 'maria.perez@example.com'),
('Lucía', 'Gómez', 22, 'lucia.gomez@example.com'),
('Marta', 'Rodríguez', 19, 'marta.rodriguez@example.com'),
('Sofía', 'López', 21, 'sofia.lopez@example.com');





CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    passVARCHAR(255) NOT NULL
);