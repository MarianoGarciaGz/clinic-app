const mongoose = require('mongoose');

// Define un esquema para tu colección en MongoDB
const reservaSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  fecha: String,
  hora: String,
  tratamiento: String,
  comentarios: String,
});

// Crea un modelo basado en el esquema
const Reserva = mongoose.model('Reserva', reservaSchema);

// Función para insertar datos en la base de datos
const insertarDatos = async (formData) => {
  try {
    // Crea una nueva instancia del modelo con los datos del formulario
    const nuevaReserva = new Reserva(formData);

    // Guarda la nueva reserva en la base de datos
    const resultado = await nuevaReserva.save();

    console.log('Reserva guardada con éxito:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error al guardar la reserva:', error);
    throw error;
  }
};

module.exports = { insertarDatos };