import React from 'react';
import whyImage1 from '../Images/why.jpg';
import icon1 from '../Images/logon.png';
import icon2 from '../Images/feliz.png';
import icon3 from '../Images/feliz.png';


function WhyChooseUs() {
    const iconStyle = {
      width: '30px',
      height: '30px',
    };
  
    const rightContentStyle = {
      backgroundColor: 'var(--color-secondary)',
      padding: '20px',
      height: '100%',
      margin: '0',
      height: '60vh'
    };
  
    const leftImageStyle = {
      backgroundImage: `url(${whyImage1})`,
      backgroundSize: 'cover',
      height: '60vh',
      paddingRight: '0',
    };
  
    const iconContainerStyle = {
      width: '70px',
      display: 'flex',
      alignItems: 'center',
      marginRight: '20px',
    };
  
    const whyListContentStyle = {
      marginLeft: '-2px',
    };
  
    return (
      <div className="my-4">
        <div className="row m-0">
          {/* Why Choose Us Image */}
          <div className="col-lg-6 order-lg-1 order-2 p-0">
            <div className="why_image_container" style={leftImageStyle}></div>
          </div>
  
          {/* Why Choose Us Content */}
          <div className="col-lg-6 order-lg-2 order-1" style={rightContentStyle}>
            <div className="why_content">
              <div className="section_title_container">
                <div className="section_title text-white">
                  <h1>¿POR QUÉ DEBERÍAS VISITARNOS?</h1>
                </div>
              </div>
              <div className="why_text text-white">
                <p>
                  Ofrecemos servicios de belleza de alta calidad respaldados por profesionales capacitados, un enfoque personalizado para cada cliente y el uso de productos de primera categoría para garantizar resultados excepcionales.
                </p>
              </div>
              <div className="why_list">
                <ul>
                  {/* Why List Item */}
                  <li
                    className="d-flex flex-row align-items-center justify-content-start mb-4"
                    style={whyListContentStyle}
                  >
                    <div
                      className="icon_container"
                      style={iconContainerStyle}
                    >
                      <div className="icon">
                        <img src={icon1} alt="" style={iconStyle} />
                      </div>
                    </div>
                    <div className="why_list_content text-white">
                      <div className="why_list_title">
                        EXPERIENCIA REJUVENECEDORA
                      </div>
                      <div className="why_list_text">
                        Te ofrecemos la oportunidad de experimentar un ambiente
                        relajante y rejuvenecedor. Cada visita es una experiencia
                        que no solo mejora tu apariencia.
                      </div>
                    </div>
                  </li>
                    {/* Why List Item */}
                  <li
                    className="d-flex flex-row align-items-center justify-content-start mb-4"
                    style={whyListContentStyle}
                  >
                    <div
                      className="icon_container"
                      style={iconContainerStyle}
                    >
                      <div className="icon">
                        <img src={icon1} alt="" style={iconStyle} />
                      </div>
                    </div>
                    <div className="why_list_content text-white">
                      <div className="why_list_title">
                        ATENCIÓN PERZONALIZADA
                      </div>
                      <div className="why_list_text">
                      Nos enorgullece ofrecer un servicio personalizado a cada cliente. Escuchamos tus necesidades y deseos específicos para adaptar nuestros servicios a tus objetivos individuales.
                      </div>
                    </div>
                  </li>
                  {/* Why List Item */}
                  <li
                    className="d-flex flex-row align-items-center justify-content-start mb-4"
                    style={whyListContentStyle}
                  >
                    <div
                      className="icon_container"
                      style={iconContainerStyle}
                    >
                      <div className="icon">
                        <img src={icon1} alt="" style={iconStyle} />
                      </div>
                    </div>
                    <div className="why_list_content text-white">
                      <div className="why_list_title">
                        AMBIENTE ACOGEDOR
                      </div>
                      <div className="why_list_text">
                      Ofrecemos un ambiente acogedor y confortable. Nos esforzamos por crear un espacio que te haga sentir relajado y en paz desde el momento en que entras.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WhyChooseUs;
  