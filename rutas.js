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
    const solicitudes = await Reserva.find({estado: 'pendiente'}, '_id nombres fecha hora tratamiento telefono comentarios');
    res.send(solicitudes); // Asegúrate de que _id esté incluido en las solicitudes que envías al frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las solicitudes en BackEnd de la Aplicación.' });
  }
});

router.put('/api/actualizarEstado/:id/:action', async (req, res) => {
  try {
    const { id, action } = req.params;

    if (action === 'aceptar') {
      const updatedReserva = await Reserva.findByIdAndUpdate(id, { estado: 'aceptado' }, { new: true });

      if (!updatedReserva) {
        return res.status(404).json({ message: 'No se encontró la reserva' });
      }

      res.json({ message: 'Estado actualizado a "aceptado"', updatedReserva });
    } else if (action === 'rechazar') {
      const deletedReserva = await Reserva.findByIdAndDelete(id);

      if (!deletedReserva) {
        return res.status(404).json({ message: 'No se encontró la reserva para eliminar' });
      }

      res.json({ message: 'Reserva eliminada', deletedReserva });
    } else {
      return res.status(400).json({ message: 'Acción no válida' });
    }
  } catch (error) {
    console.error('Error al actualizar el estado:', error);
    res.status(500).json({ error: 'Error interno del servidor al actualizar el estado' });
  }
});

module.exports = router;