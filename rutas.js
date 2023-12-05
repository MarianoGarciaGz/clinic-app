const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Reserva = require('./svrModels/reserva.js');
const Admin = require('./svrModels/admin.js')
const randomize = require('randomatic')

// Middleware////////////////////////////////////
app.use((req, res, next) => {
  res.status(404).send('Ruta no encontrada');
});

app.use(cors()); // Configura cors como middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const enviarEmail = async ({ destinatario, asunto, texto }) => {

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Usando Gmail
    auth: {
      user: 'chavezlopezabigail28@gmail.com', // Correo desde donde se enviará
      pass: 'wwrm jatl ofgb nyqm', // Contraseña del correo
    },
  });

  const mailOptions = {
    from: 'p2914499@gmail.com',
    to: destinatario,
    subject: asunto,
    text: texto,
  };

  try {
    // Enviar el correo con el código
    await transporter.sendMail(mailOptions);
    //res.status(200).json({ message: '¡Correo Enviado!' });
  } catch (error) {
    console.error('Error al enviar correo.', error);
    //res.status(500).json({ error: 'Error al enviar correo.' });
  }
}


const confirmar = async (req, res, next) => {

  try {
    const { id } = req.params;
    const updatedReserva = await Reserva.findByIdAndUpdate(id, { estado: 'aceptado' }, { new: true });
    if (!updatedReserva) {
      return res.status(404).json({ message: 'No se encontró la reserva' });
    }
    //res.json({ message: 'Estado actualizado a "aceptado"', updatedReserva });
    next();
  } catch (error) {
    console.error('Error al aceptar el estado:', error);
    res.status(500).json({ error: 'Error interno del servidor al actualizar el estado' });
  }
};


const validarCantidadEnBD = async (req, res, next) => {
  try {
    const validar = req.body;

    // Utiliza await para esperar a que la promesa de countDocuments se resuelva
    const cantidad = await Reserva.countDocuments({ fecha: validar.fecha, hora: validar.hora });


    if (cantidad < 3) {
      // Si la cantidad es menor que 3, continúa con el siguiente middleware o controlador
      next();
    } else {
      res.status(400).json({ error: 'Ya hay 3 citas el mismo día y hora' });
    }
  } catch (error) {
    console.error('Error al validar cantidad en la base de datos:', error);
    res.status(500).json({ error: 'Error al validar cantidad en la base de datos.' });
  }
};


const validarDatosEnBD = async (req, res, next) => {
  try {
    const validar = req.body;
    const existe = await Reserva.find({ fecha: validar.fecha, hora: validar.hora, tratamiento: validar.tratamiento }).exec();

    if (existe == "") {
      next();
    } else {
      console.error('Ya hay una reserva existente para esa misma hora, dia y tratamiento.', error);
      res.status(400).json({ error: 'Ya hay una reserva existente para esa misma hora, dia y tratamiento.' })
    }

  } catch (error) {
    console.error('Error al validar Fecha, Hora y Dia en base de datos:', error);
    res.status(500).json({ error: 'Error al validar Fecha, Hora y Dia en base de datos.' });
  }
};


/////////////////////////////////////////////////////
let codigoGenerado = '';




router.post('/api/verificarCodigo', async (req, res) => {
  try {
    // Obtener el código de verificación del cuerpo de la solicitud
    const { verificationCode } = req.body;

    if (verificationCode === codigoGenerado) {
      return res.status(200).json({ message: 'Código de verificación válido' });
    } else {
      return res.status(400).json({ message: 'Código de verificación inválido' });
    }
  } catch (error) {
    console.error('Error al verificar el código:', error);
    return res.status(500).json({ message: 'Error al verificar el código' });
  }
});

router.post('/api/enviarCodigo', validarCantidadEnBD, validarDatosEnBD, async (req, res) => {
  const { email } = req.body;

  // Generar código aleatorio de 4 dígitos
  const verificationCode = randomize('0', 4);

  codigoGenerado = verificationCode;

  enviarEmail({
    destinatario: email,
    asunto: 'Código de Verificación',
    texto: `Tu código de verificación es: ${verificationCode}`
  });
  res.status(200).json({ message: '¡Correo Enviado!' });
});



///////////////////////////////////////////////////////////////////////////

router.post('/api/insertarDatosAdmin', validarCantidadEnBD, validarDatosEnBD, async (req, res) => {
  try {
    const nuevoDato = new Reserva(req.body);
    await nuevoDato.save();
    res.json({ mensaje: 'Dato insertado exitosamente' });
    console.log('Dato insertado correctamente Desde Admin');
  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

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
    const emailReserva = await Reserva.findById(id);
    const deletedReserva = await Reserva.findByIdAndDelete(id);
    if (!deletedReserva) {
      return res.status(404).json({ message: 'No se encontró la reserva para eliminar' });
    }
    else if (emailReserva.email !== 'Indefinido') {

      enviarEmail({
        destinatario: emailReserva.email,
        asunto: 'Tu Reservacion ha sido Rechazada',
        texto: `Tu Reservacion para ${emailReserva.tratamiento}, el día ${emailReserva.fecha}, para las ${emailReserva.hora} horas ha sido Rechazada. Favor de contactarnos en caso de Aclaraciones.`
      });
      
    }
    res.json({ message: 'Reserva eliminada', deletedReserva });
    //next();
  } catch (error) {
    console.error('Error al rechazar el estado:', error);
    res.status(500).json({ error: 'Error interno del servidor al actualizar el estado' });
  }

});

router.put('/api/actualizarEstado/aceptar/:id', confirmar, async (req, res) => {
  const { id } = req.params;
  const emailReserva = await Reserva.findById(id);
  //const email = emailReserva.email;

  
  enviarEmail({
    destinatario: emailReserva.email,
    asunto: '¡Tu Reservacion ha sido Aceptada!',
    texto: `Tu Reservacion para ${emailReserva.tratamiento}, el día ${emailReserva.fecha}, para la las ${emailReserva.hora} horas ha sido Aceptada! Agradecemos tu preferencia, para dudas consulta nuestra pagina de contacto donde encontraras todas nuestras redes sociales.`
  });
  res.status(200).json({ message: '¡Correo Enviado!' });
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


router.get('/api/verifyToken', verifyToken, (req, res) => {
  // Acciones que deseas realizar si el token es válido
  res.json({ message: 'Acceso autorizado a otra-pagina', user: req.user });
});

module.exports = router;