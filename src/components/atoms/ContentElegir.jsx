
import React, { useState } from 'react';

function ContentElegir({ concepto }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="content-elegir">
      <div className="input-container">
        <label className='labelcitas'>
          {concepto}
          <input
            className="rounded-box-elegir"
            type="text"
            name={concepto}
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
}
export default ContentElegir;