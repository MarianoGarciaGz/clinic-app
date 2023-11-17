const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  fecha: { type: String, required: true },
  hora: { type: String, required: true },
  tratamiento: { type: String, required: true },
  comentarios: String,
});

const Reserva = mongoose.model('Reserva', reservaSchema, 'agendas');

module.exports = Reserva;