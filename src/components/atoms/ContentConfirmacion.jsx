import React from 'react';

function ContentElegir({ concepto }) {
  return (
    <div className="content-elegir">
      <div className="input-container">
        <label className='labelcitas'>
          {concepto}
          <input className="rounded-box-elegir" type="text" name={concepto} />
        </label>
        <div className="submit-button">
        <input type="submit" value="CONFIRMAR" />
        </div> 
        
      </div>
    </div>
  );
}

export default ContentElegir;