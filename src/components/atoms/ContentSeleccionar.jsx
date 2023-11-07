import React, { useState } from 'react';

function ContentSeleccionar({ concepto }) {
    const opciones = ["Opción 1", "Opción 2", "Opción 3", "Opción 2", "Opción 3", "Opción 2", "Opción 3", "Opción 2", "Opción 3"];
  const [seleccion, setSeleccion] = useState("");

  const handleSeleccionChange = (event) => {
    setSeleccion(event.target.value);
  };

  return (
    <div className="content-elegir">
      <div className="input-container-2">
        {/* <div className="label-container"> */}
          <label className='labelcitas'>
            {concepto}
          </label>
        {/* </div> */}
        <div className="select-container">
          <select value={seleccion} onChange={handleSeleccionChange}>
            <option value="">Seleccionar</option>
            {opciones.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ContentSeleccionar;