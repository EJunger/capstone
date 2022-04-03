import Nav from "../../components/Nav";
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {students: data}
    }

}

const StudentDirectory = ({students}) => {
    return (
        <>
            <Nav/>
            <div>
                <h1>Student Directory</h1>
                {students.map(student => (
                    <Link href={'/students/' + student.id} key={student.id}>
                        <a>
                            <h3>{student.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
            
        </>
    );
}

export default StudentDirectory;