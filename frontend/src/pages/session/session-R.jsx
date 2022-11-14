import { Register } from "../../components/session/register"
import logo from "/Logo.png";

export const SessionRegister = () => {
    return (
        <div className="session_container">
            <div className="session_logo">
                <img src={logo}  alt="My logo" className="img_logo"/>
                </div>
            <div className="session_form">
                <Register />
            </div>
        </div>
    )
}