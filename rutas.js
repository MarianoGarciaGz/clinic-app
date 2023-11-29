const express = require('express');
const router = express.Router();
const Reserva = require('./svrModels/reserva.js');
const Users = require('./svrModels/users.js'); // Ajusta la ruta según tu estructura de archivos
const nodemailer = require('nodemailer');
const app = express();

const generateVerificationCode = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

router.post('api/verificarCorreo', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Users.findOne({ email });

    if (user) {
      res.json({ estado: user.estado });
    } else {
      user = new Users({
        email,
        codigo: verificationCode,
        estado: 'NoVerificado'
      });
      await user.save();
      res.json({ estado: 'NoEncontrado' });
    }
  } catch (error) {
    console.error('Error al verificar el correo:', error);
    res.status(500).json({ error: 'Error al verificar el correo.' });
  }
});

router.post('api/enviarCodigoVerificacion', async (req, res) => {
  const { email } = req.body;

  try {
    let user = await Users.findOne({ email });

    if (!user || user.estado === 'NoVerificado') {
      const verificationCode = generateVerificationCode();

      if (!user) {
        user = new Users({
          email,
          codigo: verificationCode,
          estado: 'NoVerificado'
        });
      } else {
        user.codigo = verificationCode;
        user.estado = 'NoVerificado';
      }

      await user.save();

      sendVerificationCode(email, verificationCode);

      res.json({ message: 'Código de verificación enviado correctamente.' });
    } else {
      res.json({ message: 'Correo ya verificado.' });
    }
  } catch (error) {
    console.error('Error al enviar el código de verificación:', error);
    res.status(500).json({ error: 'Error al enviar el código de verificación.' });
  }
});


const sendVerificationCode = async (email, code) => {
  try {
      const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'drackelive@gmail.com', // Cambia por tu dirección de correo
              pass: 'azulindigo27', // Cambia por tu contraseña de correo
          },
      });

      const mailOptions = {
          from: 'drackelive@gmail.com', // Cambia por tu dirección de correo
          to: email,
          subject: 'Código de verificación',
          text: `Tu código de verificación es: ${code}`,
      };

      await transporter.sendMail(mailOptions);
      console.log('Correo electrónico enviado con el código de verificación.');
  } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      throw new Error('Error al enviar el correo electrónico.');
  }
};


///////////////////////////////////////////////////////////////////////////

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

module.exports = router;