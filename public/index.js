const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/cbldb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

// Definir un esquema y un modelo de Mongoose
const AgendaSchema = new mongoose.Schema(
    {fecha: {type: Date,    
        },
        hora: {
            type: String, 

        },
        nombre:{
            type:String, 
            require:true
        },
        telefono:{
            type:String, 
            
        },
        tratamiento:{
            type:String, 
           
        },
        comentario:{
            type:String, 
           
        },
        aceptado: {
            type: Boolean,
           
        }
    },
    {
        timestamps:true
    }
);

const Agenda = mongoose.model('Agenda', AgendaSchema);

// Ruta para manejar la solicitud POST desde el formulario
app.post('/api/reservar', async (req, res) => {
  try {
    const formData = req.body; // Los datos del formulario estarán en req.body
    // Crea una nueva entrada en la base de datos usando el modelo de Mongoose
    const nuevaReserva = new Agenda(formData);
    await nuevaReserva.save(); // Guarda la nueva reserva en la base de datos
    res.status(201).json({ message: 'Datos guardados correctamente' });
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 27017;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
