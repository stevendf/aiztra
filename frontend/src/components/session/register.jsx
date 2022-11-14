import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/Blogs");
            console.log(res.message);
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
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Crear cuenta</h1>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="firstName"
                    onChange={handleChange}
                    value={data.firstName}
                    required
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    onChange={handleChange}
                    value={data.lastName}
                    required
                />
                <input
                    type="email"
                    placeholder="Correo"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required
                />
                {error && <div >{error}</div>}
                <button type="submit">
                    Registrarse
                </button>
                <Link to="/Ingresar" className="link-btn">
                <button type="button" className="link-btn">
                    ¿Ya tienes una cuenta? Ingresa aquí.
                </button>
                </Link>
            </form>
        </div>
    );
};