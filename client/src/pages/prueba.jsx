import { Form, Formik } from "formik";
import { getUserRequest } from "../api/user.api";

//Esta pagina solo la uso para pruebas..

export function Login2() {
    return (
        <div className="auth-form-container">
            <Formik
                initialValues={{
                    email: [],
                    password: [],
                }}
                onSubmit={async (values) => {
                    console.log(values)
                    try {
                        const response = await getUserRequest;
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
                        <button type="submit">Ingresar</button>
                        <button
                            className="link-btn"
                        >
                            ¿Olvidaste tu contraseña?
                        </button>
                        <span color="white">o</span>
                        <button type = "button"
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