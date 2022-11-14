import { Login } from "../../components/session/login";
import logo from "/Logo.png";

export const SessionLogin = () => {
    return (
        <div className="session_container">
            <div className="session_logo">
                <img src={logo} alt="My logo" className="img_logo"/>
            </div>
            <div className="session_form">
                <Login />
            </div>
        </div>
    )
}