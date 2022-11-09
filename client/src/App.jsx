import React from "react"
import Layout from "./components/layout"
import { RegisterForm, LoginForm } from "./pages/session";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import About from "./pages/about"
import ErrorPage from "./pages/errorpage";
import { Login2 } from "./pages/prueba";
import { AuthProvider } from "./context/AuthContext";
import Tutors from "./pages/tutores";
import BookSolutions from "./pages/booksolutions";
import Home from "./pages/home";


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="/info" element={<About />} />
            <Route path="/ingresar" element={<LoginForm />} />
            <Route path="/registrarse" element={<RegisterForm />} />
            <Route path="/principal" element={<Home />} />
            <Route path="/tutores" element={<Tutors />} />
            <Route path="/libros" element={<BookSolutions />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/prueba" element={<Login2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}