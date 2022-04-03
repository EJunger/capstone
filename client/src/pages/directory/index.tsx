import Link from "next/link";
import data from "./tutorList";
import Nav from "../../components/Nav";
import Directory from "../../components/Directory";
import Footer from "../../components/Footer";

export default function Home({ posts }) {
    return (
        <>
            <Nav />
            <div id="books__body">
                <main className="books__main">
                    <section>
                        <div className="books__container">
                            <div className="dirrow">
                                <h2 className="zoomHeader">
                                    Tutor Directory</h2>
                                <div className="books">
                                    {posts.map((post) =>
                                    (<Directory post={post} key={post.Id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer/>
        </>
    );
}

export async function getStaticProps() {
    const posts = data;
    return {
        props: { posts }
    };
}
