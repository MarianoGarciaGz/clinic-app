import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="contact" className="text-center text-lg-start justify-content-center bg-light text-muted">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Maps Sucursal</h6>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.6238186373757!2d-101.78589842531687!3d19.813540928406205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842dc9397deeb7b9%3A0x8672c731dd986eda!2sDel%20Tepeyac%2099b%2C%20Moderna%2C%2058680%20Zacapu%2C%20Mich.!5e0!3m2!1ses!2smx!4v1687741538139!5m2!1ses!2smx"
                                width="400"
                                height="300"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Ubicación</h6>
                            <p>
                                Thomas Alva Edison #335, Col. Electrisistas <br></br>
                                Morelia, Michoacán
                            </p>
                            <p>443 312 44 73</p>
                            <h6 className="fw-bold">Horario</h6>
                            <p>
                                Lunes a Viernes: 9:00 am - 6:00 pm <br></br>
                                Sabado: 9:00 am - 2:00 pm
                            </p>
                            <a
                                href="https://goo.gl/maps/twiGS85aafvF8adc8"
                                target="_blank"
                                className="btn btn-primary px-4 me-md-2">
                                Como llegar
                            </a>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Redes</h6>
                        </div>
                    </div>
                </div>

                <div className="text-center p-4">
                    <p className="mb-0">© 2023 Clínica de Belleza Lily.</p>
                    <a className="text-reset fw-bold" href="/privacy.html">
                        Todos los derechos reservados. Consulta nuestro Aviso de Privacidad.
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
