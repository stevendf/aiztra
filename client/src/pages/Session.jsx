import React, { useState, useContext } from "react";
import "../styles/session.css";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { createNewUserRequest } from "../api/user.api";
import { getUserRequest } from "../api/user.api";

//Login

export const Login = (props) => {
  return (
    <div className="auth-form-container">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          console.log(values)
          try {
            const response = await getUserRequest(values)
            console.log(response)
          } catch (error) {
            console.error(error)
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Correo</label>
            <input type="email"
              placeholder="ejemplo@correo.com"
              id="email"
              name="email"
              onChange={handleChange} />
            <label htmlFor="password">Contraseña</label>
            <input type="password"
              placeholder="********"
              id="password"
              name="password"
              onChange={handleChange} />
            <Link to="/home">
              <button type="submit">Ingresar</button>
            </Link>
            <Link to="/error">
              <button type="button"
                className="link-btn"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </Link>
            <span color="white">o</span>
            <button
              type="button"
              className="link-btn"
              onClick={() => props.onFormSwitch("register")}
            >
              ¿No tienes una cuenta? Registrate aquí.
            </button>
          </Form>
        )}

      </Formik>
    </div>
  )
}

//Registrarse

export const Register = (props) => {

  return (
    <div className="auth-form-container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          console.log(values)
          try {
            const response = await createNewUserRequest(values)
            console.log(response)
          } catch (error) {
            console.error(error)
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombres</label>
            <input type="text" name="name" id="name" placeholder="escribe tu nombre"
              onChange={handleChange} />
            <label htmlFor="email">Correo</label>
            <input type="text" name="email" id="email" placeholder="ejemplo@correo.com"
              onChange={handleChange} />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="nueva contraseña"
              onChange={handleChange} />
            <button type="submit">registrarse</button>
            <button type="button" className="link-btn" onClick={() => props.onFormSwitch("login")}>
              ¿Ya tienes una cuenta? Ingresa aquí.
            </button>
          </Form>
        )}

      </Formik>
    </div>
  )
}

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
