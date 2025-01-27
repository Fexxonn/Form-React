import { useState } from "react";
import "./App.css";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [completado, setCompleto] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    setCompleto(true);
  }

  if (completado == true) {
    return (
      <div id="Tarjeta" className="datos-form">
        <h1>Contactado</h1>
        <div className="datos-form-info">
          <div id="info">
            <p>
              Nombre:{" "}
              <span>
                {nombre} {apellido}
              </span>
            </p>
            <p>
              Correo: <span>{correo}</span>
            </p>
            <p>
              Mensaje: <span> {mensaje}</span>
            </p>
            <input
              type="submit"
              value="Back"
              onClick={() => {
                setCompleto(false);
              }}
              className="login-button"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="datos-container">
        <form
          onSubmit={onSubmit}
          className="datos-form"
          action="https://formsubmit.co/torrenegradavid@gmail.com"
          method="POST"
        >
          <h1>Contactame</h1>
          <div className="datos-form-group">
            <label htmlFor="Nombre">Nombre</label>
            <input
              required
              type="text"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              id="Nombre"
              name="name"
            />
          </div>
          <div className="datos-form-group">
            <label htmlFor="Apellido">Apellido</label>
            <input
              required
              type="text"
              value={apellido}
              onChange={(event) => setApellido(event.target.value)}
              id="Apellido"
              name="lastName"
            />
          </div>
          <div className="datos-form-group">
            <label htmlFor="Correo">Correo</label>
            <input
              required
              type="email"
              value={correo}
              onChange={(event) => setCorreo(event.target.value)}
              id="Correo"
              name="email"
            />
          </div>
          <div className="datos-form-group">
            <label htmlFor="Mensaje">Mensaje</label>
            <textarea
              value={mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              maxLength={350}
              id="Mensaje"
              name="asunto"
            ></textarea>
          </div>
          <input type="submit" value="submit" className="login-button" />
        </form>
      </div>
    </>
  );
};

export default App;

// By Fexxonn ⁂
