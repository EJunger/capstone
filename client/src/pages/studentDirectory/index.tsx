import Nav from "../../components/Nav";
import Link from 'next/link';
import { Table } from "react-bootstrap";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { students: data }
    }

}

const studentDirectory = ({ students }) => {
    return (
        <>
            <Nav />
            <div>
                <h1 style={{textAlign: 'center', width: '100%', fontSize: '36pt'}}>Student Directory</h1>
                <br/>
                <br/>
                <Table>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>

                    </tr>

                    {students.map(student => (
                        <tr key={student.id}>

                            <td>
                                <Link href={'/students/' + student.id} key={student.id}>
                                    <a>
                                        <h3>{student.name}</h3>

                                    </a>
                                </Link>
                            </td>
                            <td>
                                <h3>{student.username}</h3>
                            </td>
                            <td>
                                <h3>{student.email}</h3>
                            </td>
                            <td>
                                <h3>{student.address.city}</h3>
                            </td>
                        </tr>

                    ))}

                </Table>
            </div>

        </>
    );
}

export default studentDirectory;