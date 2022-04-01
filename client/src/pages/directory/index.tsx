import Nav from "../../components/Nav";
import Link from "next/link";
import { data } from './tutorList';

export const getStaticProps = async () => {
    const posts = data;

    return {
        props: { tutors: data }
    }
}

const Directory = ({ tutors }) => {
    return (
        <>
            <Nav />
            <div>
                <h1>Tutor Directory</h1>
                <ol>
                    {tutors.map((post) => (
                        <li key={post.id}>
                            <Link href={`directory/${post.username}`}>
                                <a>{post.name}</a>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>

        </>
    );
}

export default Directory;