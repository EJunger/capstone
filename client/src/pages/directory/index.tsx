import Link from "next/link";
import data from "./tutorList";
import Nav from "../../components/Nav";
export default function Home({ posts }) {
    return (
        <>
             <Nav/>
            <main>
            <h1>Tutor Directory</h1>
                <ol>
                    {posts.map((post) => (
                        <li key={post.Id}>
                            <Link href={`directory/${post.Slug}`}>
                                <a>{post.Title}</a>
                            </Link>
                        </li>
                    ))}
                </ol>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const posts = data;

    return {
        props: { posts }
    };
}
