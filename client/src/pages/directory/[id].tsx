import Nav from "../../components/Nav";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(tutor => {
        return {
          params: { id: tutor.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
    const data = await res.json();
  
    return {
      props: { tutor: data }
    }
  }

const Profile = ({ tutor }) => {
    return (
        <>
        <Nav/>
      <div>
        <p>{ tutor.profilePicture }</p>
        <h1>{ tutor.name }</h1>
        <p>{ tutor.email }</p>
        <p>{ tutor.desc }</p>
        <p>{ tutor.subjects }</p>
        <p>{ tutor.website }</p>
        <p>{ tutor.address.city }</p>
      </div>
      </>
    );
  }
  
  export default Profile;