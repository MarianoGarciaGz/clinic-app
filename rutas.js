const express = require('express');
const router = express.Router();
const Reserva = require('./svrModels/reserva.js'); // Ajusta la ruta según tu estructura de archivos
const Admin = require('./svrModels/admin.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
    const solicitudes = await Reserva.find({ estado: 'pendiente' }, '_id nombres fecha hora tratamiento telefono comentarios');
    res.send(solicitudes); // Asegúrate de que _id esté incluido en las solicitudes que envías al frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las solicitudes en BackEnd de la Aplicación.' });
  }
});

router.get('/api/obtenerSolicitudesAceptadas', async (req, res) => {
  try {
    const solicitudes = await Reserva.find({ estado: 'aceptado' }, '_id nombres fecha hora tratamiento telefono comentarios');
    res.send(solicitudes);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las solicitudes en BackEnd de la Aplicación.' });
  }
});

router.get('/api/obtenerSolicitudesAceptadas/:dia/:mes/:anio', async (req, res) => {
  const { dia, mes, anio } = req.params;
  try {
    const solicitudes = await Reserva.find({ estado: 'aceptado', fecha: `${dia}/${mes}/${anio}` }, '_id nombres fecha hora tratamiento telefono comentarios');
    res.send(solicitudes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las solicitudes en BackEnd de la Aplicación.' });
  }
});


router.put('/api/actualizarEstado/rechazar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReserva = await Reserva.findByIdAndDelete(id);
    if (!deletedReserva) {
      return res.status(404).json({ message: 'No se encontró la reserva para eliminar' });
    }
    res.json({ message: 'Reserva eliminada', deletedReserva });

  } catch (error) {
    console.error('Error al rechazar el estado:', error);
    res.status(500).json({ error: 'Error interno del servidor al actualizar el estado' });
  }
});

router.put('/api/actualizarEstado/aceptar/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const updatedReserva = await Reserva.findByIdAndUpdate(id, { estado: 'aceptado' }, { new: true });
    if (!updatedReserva) {
      return res.status(404).json({ message: 'No se encontró la reserva' });
    }
    res.json({ message: 'Estado actualizado a "aceptado"', updatedReserva });

  } catch (error) {
    console.error('Error al aceptar el estado:', error);
    res.status(500).json({ error: 'Error interno del servidor al actualizar el estado' });
  }
});

router.post('/api/login', async (req, res) => {
  try {

    // Verifica las credenciales del usuario (aquí deberías tener tu lógica de autenticación)
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin) {
      // Compara la contraseña proporcionada con la almacenada en la base de datos
      const match = await bcrypt.compare(password, admin.password);

      if (match) {
        // Crea un token con la información del usuario
        const token = jwt.sign({ email }, 'tu_secreto_secreto', { expiresIn: '2h' });

        // Guarda el token en la colección de administradores
        admin.token = token;
        await admin.save();

        res.json({ token });
      } else {
        res.status(401).json({ message: 'Credenciales incorrectas (passw)' });
      }
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas (email)' });
    }
  } catch (error) {
    console.error('Error en el proceso de inicio de sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  } else {
    try {
      // Decodifica el token proporcionado en la solicitud
      const decoded = jwt.verify(token, 'tu_secreto_secreto');

      // Busca el admin en la base de datos por su email y token
      const admin = await Admin.findOne({ email: decoded.email, token });

      if (admin) {
        // Si el admin y el token coinciden, establece req.user y pasa al siguiente middleware
        req.user = decoded;
        next();
      } else {
        // Si no hay coincidencia en la base de datos, el token no es válid
        console.error('Error en la verificacion del token');
        res.status(401).json({ message: 'Token inválido' });
      }
    } catch (error) {
      console.error('Error al verificar el token:', error);
      res.status(401).json({ message: 'Token inválido' });
    }
  }
};

// Usa el middleware en las rutas protegidas
router.get('/api/verifyToken', verifyToken, (req, res) => {
  // Acciones que deseas realizar si el token es válido
  res.json({ message: 'Acceso autorizado a otra-pagina', user: req.user });
});

module.exports = router;