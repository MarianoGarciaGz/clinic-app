import React from 'react';

function ContentElegir({tratamiento}) {
  return (
      <div className="content-elegir">
        <h2 className='text-elegir'>{tratamiento}</h2>
        <div className="rounded-box-elegir">
        </div>
      </div>
  );
}

export default ContentElegir;