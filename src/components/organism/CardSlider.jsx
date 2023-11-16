import React from 'react';
import img from '../Images/person1.jpg';

const CardSlider = () => {
  return (
    <div className="container mt-8 mb-8">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card text-center custom-border-us mt-4 mb-4">
            <img
              className="card-img-top rounded-circle mx-auto mt-3"
              src={img}
              alt="Person"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Person 1</h5>
              <hr className="w-25 mx-auto mb-4 custom-border-us" /> {/* Línea debajo del título */}
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida nunc eget pulvinar placerat.
              </p>
            </div>
          </div>
        </div>

        {/* Repite esta estructura para las otras tarjetas con los ajustes necesarios */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card text-center custom-border-us mt-4 mb-4">
            <img
              className="card-img-top rounded-circle mx-auto mt-3"
              src={img}
              alt="Person"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Person 1</h5>
              <hr className="w-25 mx-auto mb-4 custom-border-us" /> {/* Línea debajo del título */}
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida nunc eget pulvinar placerat.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card text-center custom-border-us mt-4 mb-4">
            <img
              className="card-img-top rounded-circle mx-auto mt-3"
              src={img}
              alt="Person"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Person 1</h5>
              <hr className="w-25 mx-auto mb-4 custom-border-us" /> {/* Línea debajo del título */}
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida nunc eget pulvinar placerat.
              </p>
            </div>
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default CardSlider;
