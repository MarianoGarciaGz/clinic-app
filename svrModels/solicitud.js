const mongoose = require('mongoose');

const solicitudSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    telefono: String,
    fecha: String,
    hora: String,
    tratamiento: String,
    comentarios: String
}
);

const Solicitud = mongoose.model('Solicitud', solicitudSchema);

module.exports = Solicitud;