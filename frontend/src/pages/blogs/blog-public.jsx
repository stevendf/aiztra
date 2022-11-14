import { Blog } from "../../components/blogs/blog";
import { AdCard, AdFlexbox } from "../../components/blogs/card-ad";
import { Navbar } from "../../components/navbar/navbar";
import profile from "../../assets/profile.png";
import "../../components/blogs/adcar.css";

export const PublicBlogs = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="blogs_container">
                <div className="blog">
                    <Blog />
                </div>
                <div className="AdBlog">
                    <AdFlexbox className="AdBlog">
                        <AdCard
                            src={profile}
                            title="Tutor 1"
                            disponible="M"
                        />

                        <AdCard
                            src={profile}
                            title="Tutor 2"
                            disponible="C"
                        />

                        <AdCard
                            src={profile}
                            title="Tutor 3"
                            disponible="T"
                        />
                    </AdFlexbox>
                </div>
            </div>
        </>
    )
}
