import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({user, children, redirectTo="/Inicio"}) => {
    if (!user) {
        return <Navigate to={redirectTo}/>
    }
return (
<Outlet/>
)
}

export const LoggedOut = ({user, children, redirectTo="/Blogs"}) => {
    if (user) {
        return <Navigate to={redirectTo}/>
    }
return (
<Outlet/>
)
}