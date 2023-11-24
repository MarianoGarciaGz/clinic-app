const express = require('express');
const router = express.Router();
const Reserva = require('./svrModels/reserva.js'); // Ajusta la ruta según tu estructura de archivos
const Solicitud = require('./svrModels/solicitud.js');

router.post('/api/insertarDatos', async (req, res) => {
  try {
    const nuevoDato = new Reserva(req.body);
    await nuevoDato.save();
    res.json({ mensaje: 'Dato insertado exitosamente' });
    console.log('Dato insertado correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/api/obtenerSolicitudes', async (req, res) => {
  try {
     const solicitudes = await Reserva.find(); // Obtener todas las solicitudes de la base de datos
     
     res.send(solicitudes); // Devolver las solicitudes en formato JSON

  } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Error al obtener las solicitudes en BackEnd de la Aplicación.' });
  }
});

module.exports = router;