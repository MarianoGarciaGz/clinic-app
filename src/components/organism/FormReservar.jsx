import React from 'react';
import usuario from '../Images/usuario.png'
import fecha from '../Images/fecha.png'
import hora from '../Images/hora.png'
import tratamiento from '../Images/tratamiento.png'
import comentarios from '../Images/comentarios.png'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { getMonth, isToday } from 'date-fns';


const FormReservar = () => {

  //Estados
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fecha: '',
    hora: '',
    tratamiento: '',
    comentarios: '',
  });

  //Manejadores de Estados

  const handleChangeDate = (e) => {
    setSelectedDate(e);
    handleChangeDate2();
  };

  const handleChangeDate2 = () => {
    setFormData({
      ...formData,
      "fecha": selectedDate,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llama a la API insertaDatos
      const response = await fetch('http://localhost:5000/api/insertarDatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Datos insertados exitosamente');
        // Realiza cualquier otra lógica después de la inserción exitosa
      } else {
        console.error('Error al insertar datos');
        // Maneja el error de acuerdo a tus necesidades

      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Maneja el error de acuerdo a tus necesidades
    }

    // Reinicia el formulario si es necesario
    // setFormData({
    //   nombres: '',
    //   apellidos: '',
    //   fecha: '',
    //   hora: '',
    //   tratamiento: '',
    //   comentarios: '',
    // });
  };

  // Obtén la fecha actual
  const currentDate = new Date();
  // Suma x días a la fecha actual (en este caso, x sería 7 días)
  const maxDate = new Date(currentDate);
  maxDate.setDate(currentDate.getDate() + 7);



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Llama a tu función de MongoDB con los datos del formulario
  //   // await tuFuncionMongoDB(formData);
  //   // await insertarDatos(formData);
  //   // Aquí puedes realizar cualquier otra lógica que necesites después de enviar los datos

  //   // Reinicia el formulario si es necesario
  //   setFormData({
  //     nombres: '',
  //     apellidos: '',
  //     fecha: '',
  //     hora: '',
  //     tratamiento: '',
  //     comentarios: '',
  //   });
  // };

  return (
    <div className="container mt-4 mb-4" >
      <div className="row justify-content-center ">
        <div className="col-md-7 col-lg-8" >
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div class="row g-3">

              <div class="col-sm-6">
                <label for="username" class="form-label">Nombre(s)</label>
                <div class="input-group has-validation ">
                  <span class="input-group-text bg-white custom-border-color-orange"><img src={usuario} alt="nombre" className="img-form" /></span>
                  <input type="text" class="form-control custom-border-color-orange" id="nombres" placeholder="Nombre(s)" required="" onChange={handleChange} />
                  <div class="invalid-feedback">
                    Ingresa un nombre válido.
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <label for="username" class="form-label">Apellidos</label>
                <div class="input-group has-validation ">
                  <span class="input-group-text bg-white custom-border-color-orange"><img src={usuario} alt="apellidos" className="img-form" /></span>
                  <input type="text" class="form-control custom-border-color-orange" id="apellidos" placeholder="Apellidos" required="" onChange={handleChange} />
                  <div class="invalid-feedback">
                    Ingresa un apellido válido.
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="username" className="form-label">
                  Fecha
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text bg-white custom-border-color-orange">
                    <img src={fecha} alt="fecha" className="img-form" />
                  </span>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleChangeDate}
                    className="form-select bg-white custom-border-color-orange"
                    id="fecha"
                    placeholderText="Seleccionar..."
                    dateFormat="dd/MM/yy"
                    required
                    maxDate={maxDate}
                    minDate={new Date(Date.now())}
                  />
                  <div className="invalid-feedback">Selecciona una fecha válida.</div>
                </div>
              </div>



              {/* <div className="col-sm-6">
                <label htmlFor="username" className="form-label">Fecha</label>
                <div className="input-group has-validation">
                  <span className="input-group-text bg-white custom-border-color-orange"><img src={fecha} alt="fecha" className="img-form" /></span>
                  <select className="form-select bg-white custom-border-color-orange" id="fecha" required onChange={handleChange}>
                    <option value="">Seleccionar...</option>
                    <option>16/11/23</option>
                    <option>17/11/23</option>
                  </select>
                  <div className="invalid-feedback">
                    Selecciona una fecha válida.
                  </div>
                </div>
              </div> */}

              <div className="col-sm-6">
                <label htmlFor="username" className="form-label">Hora</label>
                <div className="input-group has-validation">
                  <span className="input-group-text bg-white custom-border-color-orange"><img src={hora} alt="hora" className="img-form" /></span>
                  <select className="form-select bg-white custom-border-color-orange" id="hora" required onChange={handleChange}>
                    <option value="">Seleccionar...</option>
                    <option>14:00</option>
                    <option>15:00</option>
                  </select>
                  <div className="invalid-feedback">
                    Selecciona una fecha válida.
                  </div>
                </div>
              </div>


              <div className="col-12">
                <label htmlFor="username" className="form-label">Tratamiento</label>
                <div className="input-group has-validation">
                  <span className="input-group-text bg-white custom-border-color-orange"><img src={tratamiento} alt="tratamiento" className="img-form" /></span>
                  <select className="form-select bg-white custom-border-color-orange" id="tratamiento" required onChange={handleChange}>
                    <option value="">Seleccionar...</option>
                    <option>Masaje Corporal</option>
                    <option>Maquillaje</option>
                    <option>Peinado</option>
                    <option>Laser</option>
                  </select>
                  <div className="invalid-feedback">
                    Selecciona una hora válida.
                  </div>
                </div>
              </div>


              <div className="col-sm-12">
                <label htmlFor="username" className="form-label">Comentarios</label>
                <div className="input-group has-validation">
                  <span className="input-group-text bg-white custom-border-color-orange"><img src={comentarios} alt="comentarios" className="img-form" /></span>
                  <input type="text" className="form-control bg-white custom-border-color-orange" id="comentarios" placeholder="Comentarios..." onChange={handleChange} />
                  <div className="invalid-feedback">
                    Escribe aquí...
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center">
              <button className="btn btn-primary btn-lg-8 mt-4 w-50" type="submit">RESERVAR</button>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default FormReservar;
