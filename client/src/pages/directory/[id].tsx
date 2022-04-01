import { data } from './tutorList';
import Nav from "../../components/Nav";

export async function getStaticPaths() {
  const posts = data;
  const paths = posts.map((post) => ({
    params: { username: post.username }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps ({params}) {
  const { username } = params;
  const post = data.find((p) => p.username === username);

  return {
    props: { post }
  }
}

const Profile = ({ post }) => {
  return (
      <>
      <Nav/>
    <div>
      <p>{ post.profilePicture }</p>
      <h1>{ post.name }</h1>
      <p>{ post.email }</p>
      <p>{ post.desc }</p>
      <p>{ post.subjects }</p>
      <p>{ post.website }</p>
    </div>
    </>
  );
}

export default Profile;