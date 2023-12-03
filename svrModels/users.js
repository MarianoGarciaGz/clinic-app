const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  
  email: { type: String, required: true },
  codigo: { type: String, required: true },
  estado: { type: String, default: 'NoVerificado' }, // Campo 'estado' con valor predeterminado
});

const Users = mongoose.model('Users', usersSchema, 'users');

module.exports = Users;