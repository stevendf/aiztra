import { useState } from "react";
import { BrowserRouter, Routes, Route, redirect, Link } from "react-router-dom";
import { LoggedOut, ProtectedRoute } from "./components/protectedroute";
import { PrivateBlogs } from "./pages/blogs/blog-private";
import { PublicBlogs } from "./pages/blogs/blog-public";
import { Books } from "./pages/books/book";
import Profile from "./pages/profile/profile";
import { SessionLogin } from "./pages/session/session-L";
import { SessionRegister } from './pages/session/session-R'
import { Tutor } from "./pages/tutors/tutores";
import "./app.css";

function App() {

  const [user, setUser] = useState(null)

  const loginprueba = () => {
    setUser({
      id: 1
    })
  }

  const logout = () => setUser(null)


  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<PublicBlogs />} />
          <Route element={<LoggedOut user={user} />}>
            <Route path="/Inicio" element={<PublicBlogs />} />
            <Route path="/Registrarse" element={<SessionRegister />} />
            <Route path="Ingresar" element={<SessionLogin />} />
            <Route path="/pruebas" element={<Books />} />
          </Route>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/Blogs" element={<PrivateBlogs />} />
            <Route path="Tutores" element={<Tutor />} />
            <Route path="Perfil" element={<Profile />} />
          </Route>
        </Routes>
        <div className="centering">
                  {user ? (<button onClick={logout}>Salir</button>) : (<button onClick={loginprueba} >Ingresar</button>)}
        </div>
      </BrowserRouter>
  )
}
export default App
