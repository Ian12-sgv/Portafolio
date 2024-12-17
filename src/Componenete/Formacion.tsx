import "../Style/Formacion.css";

function Formacion() {
  return (
    <div className="formacion-content">
      <h1>Formación</h1>
      <div className="formacion-container">
        <div className="formacion-info">
          <h1>Educación</h1>
          <div className="universidad-info">
            <h3>Universidad</h3>
            <p className="universidad">
              Universidad Nacional Experimental Politécnica de la Fuerza Armada
              Nacional Bolivariana (UNEFA) - <b>Ingeniero de Sistemas</b>
            </p>
            <p>2018 - 2024</p>
          </div>
          <div className="cursos-info">
            <h3>Cursos</h3>
            <ul className="cursos-lista">
              <li>UDEMY - 2020</li>
              <li>EDUCAIÓN IT - 2024</li>
            </ul>
          </div>
        </div>
        <div className="experiencia-info">
          <h1>Experiencia Profesional</h1>
          <div className="experiencia-item">
            <h3>Desarrollador front-end</h3>
            <p>Nerdcom - 6 meses</p>
          </div>
          <div className="experiencia-item">
            <h3>Desarrollador Full-Stack</h3>
            <p>ICLAM - 6 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formacion;
