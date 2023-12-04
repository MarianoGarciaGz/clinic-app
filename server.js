const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rutas = require('./rutas.js');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'claveSecreta';

app.use(cors());
app.use(express.json());

//rutas importadas
app.use('/', rutas);

// Conexión a la base de datos MongoDB con Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/cbldb');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});


// Define tus rutas y configuraciones adicionales aquí
app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en http://localhost:${PORT}`);
});

