import React, { useState } from 'react';
import usuario from '../Images/usuario.png';
import fecha from '../Images/fecha.png';
import hora from '../Images/hora.png';
import tratamiento from '../Images/tratamiento.png';
import comentarios from '../Images/comentarios.png';

const FormReservar = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fecha: '',
    hora: '',
    tratamiento: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://tu-servidor/api/reservar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Datos enviados correctamente');
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container mt-4 mb-4">
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-8">
        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="nombres" className="form-label">Nombre(s)</label>
              <input
                type="text"
                className="form-control custom-border-color-orange"
                id="nombres"
                placeholder="Nombre(s)"
                required=""
                value={formData.nombres}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Ingresa un nombre válido.
              </div>
            </div>
            {/* Agregar otros campos similares */}
            <div className="col-sm-6">
              <label htmlFor="apellidos" className="form-label">Apellidos</label>
              <input
                type="text"
                className="form-control custom-border-color-orange"
                id="apellidos"
                placeholder="Apellidos"
                required=""
                value={formData.apellidos}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Ingresa un apellido válido.
              </div>
            </div>
            {/* Agregar más campos de formulario aquí */}
          </div>

          <div className="col-sm-6">
              <label htmlFor="fecha" className="form-label">Fecha</label>
              <div className="input-group has-validation">
                <span className="input-group-text bg-white custom-border-color-orange">
                  <img src={fecha} alt="fecha" className="img-form" />
                </span>
                <select
                  className="form-select bg-white custom-border-color-orange"
                  id="fecha"
                  required
                  value={formData.fecha}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar...</option>
                  <option>16/11/23</option>
                  <option>17/11/23</option>
                </select>
                <div className="invalid-feedback">
                  Selecciona una fecha válida.
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="hora" className="form-label">Hora</label>
              <div className="input-group has-validation">
                <span className="input-group-text bg-white custom-border-color-orange">
                  <img src={hora} alt="hora" className="img-form" />
                </span>
                <select
                  className="form-select bg-white custom-border-color-orange"
                  id="hora"
                  required
                  value={formData.hora}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar...</option>
                  <option>14:00</option>
                  <option>15:00</option>
                </select>
                <div className="invalid-feedback">
                  Selecciona una hora válida.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="tratamiento" className="form-label">Tratamiento</label>
              <div className="input-group has-validation">
                <span className="input-group-text bg-white custom-border-color-orange">
                  <img src={tratamiento} alt="tratamiento" className="img-form" />
                </span>
                <select
                  className="form-select bg-white custom-border-color-orange"
                  id="tratamiento"
                  required
                  value={formData.tratamiento}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar...</option>
                  <option>Masaje Corporal</option>
                  <option>Maquillaje</option>
                  <option>Peinado</option>
                  <option>Laser</option>
                </select>
                <div className="invalid-feedback">
                  Selecciona una opción válida.
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <label htmlFor="comentarios" className="form-label">Comentarios</label>
              <div className="input-group has-validation">
                <span className="input-group-text bg-white custom-border-color-orange">
                  <img src={comentarios} alt="comentarios" className="img-form" />
                </span>
                <input
                  type="text"
                  className="form-control bg-white custom-border-color-orange"
                  id="comentarios"
                  placeholder="Comentarios..."
                  value={formData.comentarios}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Escribe aquí...
                </div>
              </div>
            </div>

          
          <div className="text-center">
            <button className="btn btn-primary btn-lg-8 mt-4 w-50" type="submit">
              RESERVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default FormReservar;
