import React from "react"
import Layout from "./components/layout"
import About from "./pages/about"
import ErrorPage from "./pages/errorpage";
import { RegisterForm, LoginForm } from "./pages/Session";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About/>} />
          <Route path="/ingresar" element={<LoginForm />} />
          <Route path="/registrarse" element={<RegisterForm />} />
          <Route path="/info" element={<About />} />
          <Route path="/error" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}