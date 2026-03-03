import express from 'express';
import mysql from 'mysql2';

var app = express();

// establecemos los parámetros de conexión
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // o el usuario que creaste
    password: '',          // pon la contraseña si la configuraste
    database: 'articulosdb'
});

// probamos la conexión
conexion.connect(error => {
    if (error) {
        console.error('Error de conexión:', error);
    } else {
        console.log('Conexión correcta a la base de datos');
    }
});

// ruta de prueba
app.get('/', (req, res) => {
    res.send('Ruta INICIO');
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, () => {
    console.log('Servidor OK en puerto ' + puerto);
});
