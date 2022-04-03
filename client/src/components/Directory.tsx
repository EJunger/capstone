import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

const Directory = ({ post }) => {
    return (
        <>
        <section id="profile">
            <div className="pro--container">
                <div className="container__column">
                    <Link href={`directory/${post.Slug}`}>
                        <div className="profile__img">
                        <img className="profileImg" src={post.ProfilePicture} />
                        </div>
                    </Link>
                    <div className="container__content">
                        <Link href={`directory/${post.Slug}`}>
                            <h3 className="profile__name">{post.Name}</h3>
                        </Link>
                        <p className="profile__para">{post.Subjects}</p>
                        <h6 className="profile__details">{post.Desc}</h6>
                        <div className="bookBtnDiv">
                        <a className="btn bookbtn btn-secondary" href={`directory/${post.Slug}`} >View More!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Directory;