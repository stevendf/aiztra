import React from "react"
import { RegisterForm, LoginForm } from "./pages/session";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import About from "./pages/about"
import ErrorPage from "./pages/errorpage";
import { AuthProvider } from "./context/AuthContext";
import Tutor from "./pages/tutores";
import Home from "./pages/home";


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}>
            <Route path="/ingresar" element={<LoginForm />} />
            <Route path="/registrarse" element={<RegisterForm />} />
            <Route path="/principal" element={<Home />} />
            <Route path="/tutores" element={<Tutor />} />
            <Route path="/error" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}