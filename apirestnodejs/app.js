import express from 'express';
import mysql from 'mysql';

const app = express();

// establecemos los parámetros de conexión
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'articulosdb' 
});

// probamos la conexión
conexion.connect(function(error) {
    if (error) {
        throw error;
        } else {
        console.log('¡Conexión exitosa a la base de datos!');
    }
});

app.get('/', function(res) {
    res.send('Ruta INICIO');
});

const puerto = process.env.PUERTO || 3000;


app.listen(puerto, function() {
    console.log(`Servidor Ok en puerto: ${puerto}`);
});