import { Blog } from "../../components/blogs/blog"
import { NavbarSession } from "../../components/navbar/navbar-session"

export const PrivateBlogs = () => {
    return (
        <>
            <div>
                <NavbarSession />
            </div>
            <div className="blogs_container">
                <div className="blog">
                    <Blog />
                </div>
            </div>
        </>
    )
}
