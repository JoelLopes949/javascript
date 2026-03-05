import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// habilitar CORS para tu Live Server
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

// interpretar JSON
app.use(express.json());

// conexión a MySQL
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'articulosdb'
});

conexion.connect(error => {
    if (error) {
        throw error;
    } else {
        console.log('Conexión correcta a la base de datos');
    }
});


// rutas
app.get('/', (req, res) => {
    res.send('Ruta INICIO');
});

app.get('/api/article', (req, res) => {
    conexion.query('SELECT * FROM article', (error, filas) => {
        if (error) throw error;
        res.send(filas);
    });
});

app.get('/api/article/:id', (req, res) => {
    conexion.query('SELECT * FROM article WHERE id = ?', [req.params.id], (error, fila) => {
        if (error) throw error;
        res.send(fila[0]);
    });
});

app.post('/api/article', (req, res) => {
    let data = { descripcion: req.body.descripcion, precio: req.body.precio, stock: req.body.stock };
    let sql = 'INSERT INTO article SET ?';
    conexion.query(sql, data, (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

app.put('/api/article/:id', (req, res) => {
    let { descripcion, precio, stock } = req.body;
    let sql = 'UPDATE article SET descripcion = ?, precio = ?, stock = ? WHERE id = ?';
    conexion.query(sql, [descripcion, precio, stock, req.params.id], (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

app.delete('/api/article/:id', (req, res) => {
    conexion.query('DELETE FROM article WHERE id = ?', [req.params.id], (error, filas) => {
        if (error) throw error;
        res.send(filas);
    });
});

const puerto = process.env.PUERTO || 3000;
app.listen(puerto, () => {
    console.log('Servidor OK en puerto ' + puerto);
});
