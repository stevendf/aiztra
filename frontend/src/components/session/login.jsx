import { useState } from "react";
import axios from "axios";
import "./session.css";
import { Link } from "react-router-dom";
import logo from "/Logo.png";

export const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/Blogs";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Ingresa a tu cuenta</h1>
                <input
                    type="email"
                    placeholder="Correo"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required />
                {error && <div>{error}</div>}
                <button type="submit">
                    Ingresar
                </button>
                <button className="link-btn"
                >
                    ¿Olvidaste tu contraseña?
                </button>
                <Link to="/Registrarse" className="link-btn">
                    <button className="link-btn">
                        ¿No tienes una cuenta? Registrate aquí.
                    </button>
                </Link>
            </form>
            </div>
    );
};
