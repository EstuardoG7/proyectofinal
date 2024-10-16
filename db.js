// db.js
const mysql = require('mysql2');

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost', // XAMPP por defecto usa localhost
  user: 'root',      // El usuario predeterminado de MySQL en XAMPP
  password: '',      // Sin contraseña por defecto
  database: 'gestion_pruebas', // Nombre de la base de datos que creaste
});

// Probar conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos: ', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = connection;
