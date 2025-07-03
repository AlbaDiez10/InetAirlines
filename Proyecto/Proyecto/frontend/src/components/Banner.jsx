// Importa la biblioteca React necesaria para construir el componente
import React from 'react';

// Define un componente funcional llamado Banner
function Banner() {
  return (
    // Contenedor principal del banner, con margen superior y altura fija
    <div id="banner" style={{ marginTop: "3rem", height: "44rem" }}>
      
      {/* Carousel de Bootstrap con intervalos automáticos y sin pausa al pasar el mouse */}
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"  // Cambia de imagen cada 5 segundos
        data-bs-wrap="true"      // Repite el ciclo del carrusel al llegar al final
        data-bs-pause="false"    // No se detiene al pasar el cursor por encima
      >

        {/* Indicadores (botones) para cambiar manualmente entre slides */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Contenedor de las imágenes del carrusel */}
        <div className="carousel-inner">
          {/* Slide 1, visible inicialmente (active) */}
          <div className="carousel-item active">
            <img
              src="jamaica.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "44rem" }}
            />
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="jamaica.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "44rem" }}
            />
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="jamaica.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "44rem" }}
            />
          </div>
        </div>

        {/* Botón para ir al slide anterior */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Botón para ir al siguiente slide */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

// Exporta el componente para poder usarlo en otras partes de la aplicación
export default Banner;
