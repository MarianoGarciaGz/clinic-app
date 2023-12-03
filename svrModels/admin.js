const mongoose = require('mongoose');

const Administrador = mongoose.model('Administrador', {
    email: String,
    password: String,
    token: String,
  }, 'admin');

module.exports = Administrador; 