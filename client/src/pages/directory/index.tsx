import Nav from "../../components/Nav";
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
  

    return{
        props: {tutors: data}
    }

}

const Directory = ({tutors}) => {
    return (
        <>
            <Nav/>
            <div>
                <h1>Tutor Directory</h1>
                {tutors.map(tutor => (
                    <Link href={'/tutors/' + tutor.id} key={tutor.id}>
                        <a>
                            <h3>{tutor.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
            
        </>
    );
}

export default Directory;