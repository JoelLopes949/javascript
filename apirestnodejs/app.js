import express from 'express';
import mysql from 'mysql2';

var app = express();
app.use(express.json()); // para poder interpretar JSON en el cuerpo de las solicitudes

// establecemos los parámetros de conexión
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // o el usuario que creaste
    password: '',          // pon la contraseña si la configuraste
    database: 'articulosdb'
});

// probamos la conexión
conexion.connect(error => {
    if (error) {
        throw error;
    } else {
        console.log('Conexión correcta a la base de datos');
    }
});

// ruta de prueba
app.get('/', (req, res) => {
    res.send('Ruta INICIO');
});

// mostrar todos los artículos
app.get('/api/article', (req, res) => {
    conexion.query('SELECT * FROM article', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});

// mostrar un artículo por su id
app.get('/api/article/:id', (req, res) => {
    conexion.query('SELECT * FROM article WHERE id = ?', [req.params.id], (error, fila) => {
        if (error) {
            throw error;
        } else {
            //res.send(fila);
            res.send(fila[0].descripcion); // enviamos solo el primer elemento del array
        }
    });
});

app.post('/api/article', (req, res) => {
    let data = { descripcion: req.body.descripcion, precio: req.body.precio, stock: req.body.stock };
    let sql = 'INSERT INTO article SET ?';
    conexion.query(sql, data, function(error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

// editar artículo
app.put('/api/article/:id', (req, res) => {
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let sql = 'UPDATE article SET descripcion = ?, precio = ?, stock = ? WHERE id = ?';
    conexion.query(sql, [descripcion, precio, stock, id], function(error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});
    
// eliminar artículo
app.delete('/api/article/:id', (req, res) => {
    conexion.query('DELETE FROM article WHERE id = ?', [req.params.id], function(error, filas) {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, () => {
    console.log('Servidor OK en puerto ' + puerto);
});
