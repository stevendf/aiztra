import React, { useState } from "react";
import "../styles/session.css";
import { Link } from "react-router-dom";

//Login

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Correo</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ejemplo@correo.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Contraseña</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Ingresar</button>
      </form>
      <Link to="/error">
        <button
          className="link-btn"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </Link>

      <span color="white">o</span>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        ¿No tienes una cuenta? Registrate aquí.
      </button>
    </div>
  );
};

//Registrarse

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombres</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Nombres"
          name="name"
        />
        <label htmlFor="email">Correo</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ejemplo@correo.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Contraseña</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Registrarse</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        ¿Ya tienes una cuenta? Ingresa aquí.
      </button>
    </div>
  );
};

export function LoginForm() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="Session">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export function RegisterForm() {
  const [currentForm, setCurrentForm] = useState("register");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="Session">
      {currentForm === "register" ? (
        <Register onFormSwitch={toggleForm} />
      ) : (
        <Login onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
