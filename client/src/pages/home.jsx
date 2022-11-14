import React from "react";
import "../styles/cardhome.css";
import { Link } from "react-router-dom";
import Layout2 from "../components/layour2";

function Home() {
  return (
    <>
    <Layout2/>
    <div className="flex">
      <Link to="/tutores">
        <h1 className="card">
          Buscar Tutores
        </h1>
      </Link>
      <Link to="/error">
        <h1 className="card">
          Buscar Libros
        </h1>
      </Link>
    </div>
    </>
  );
}

export default Home;