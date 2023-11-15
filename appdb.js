const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/cbldb'

// CONEXION
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('************ CONEXIÓN CORRECTA ************');
  })
  .catch(err => {
    console.error('************ ERROR DE CONEXIÓN ************');
    console.error(err); // Imprime el detalle del error
  });

 //ESQUEMA (ES COMO LA ESTRUCTURA DEL MODELO)
 const AgendaSchema = new mongoose.Schema(
    {
        fecha: {
            type: Date,
            require:true
        },
        hora: {
            type: String, 
            require:true
        },
        nombre:{
            type:String, 
            require:true
        },
        telefono:{
            type:String, 
            require:true
        },
        tratamiento:{
            type:String, 
            require:true
        },
        comentario:{
            type:String, 
            require:true
        },
        aceptado: {
            type: Boolean,
            default: false 
        }
    },
    {
        timestamps:true
    }
 )

 const AdminSchema = new mongoose.Schema(
    {
        telefono:{
            type:String,
            require:true
        }
    },{
        timestamps:true
    }
 )

 // MODELO
 const Agenda = new mongoose.model('agenda', AgendaSchema)
 const Admin = new mongoose.model('admin', AdminSchema)

 
// CREACION 
Admin.create({
    telefono:"4361223314"
})