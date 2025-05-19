const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001; // Puerto en el que correrá el backend

app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost', // Usar el nombre del contenedor MySQL si está en red Docker o 'localhost' en el caso de link
    user: 'root',
    password: 'sql1234pass', // Contraseña asignada al crear el contenedor MySQL
    database: 'midb'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener los usuarios
app.get('/personas', (req, res) => {
    const sql = 'SELECT * FROM personas';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ error: 'Error al obtener los datos' });
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
