import { useState } from "react";
import "./App.css";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [completado, setCompleto] = useState(false);

  const [nombreCompleto, setNombreCompleto] = useState("");

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
            <form
              action="https://formsubmit.co/9903d3e1a8fb4276bb84df430f16c215 "
              method="POST"

            >
              <div style={{display:"none"}}>
                <input
                  type="text"
                  name="nombre"
                  defaultValue={`${nombre} ${apellido}`}
                />
                <input type="text" name="correo" defaultValue={correo} />
                <input type="text" name="mensaje" defaultValue={mensaje} />
              </div>
              <input
                type="submit"
                value="Back"
                onClick={() => {
                  setCompleto(false);
                }}
                className="login-button"
              />
              <input
                type="submit"
                value="Enviar Correo"
                className="login-button"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="datos-container">
        <form className="datos-form" onSubmit={onSubmit}>
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
              required
              value={mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              maxLength={350}
              id="Mensaje"
              name="asunto"
            ></textarea>
          </div>
          <input type="submit" value="Enviar Info" className="login-button" />
        </form>
      </div>
    </>
  );
};

export default App;

// By Fexxonn ⁂
