import Link from "next/link";
import data from "./tutorList";
import Nav from "../../components/Nav";

export default function Post({ post }) {
  return (
    <>
      <Nav/>
      <main>
        <article>
          <img src={post.ProfilePicture}/>
          <h1>{post.Name}</h1>
          <p>{post.Email}</p>
          <h1>{post.Subjects}</h1>
          <p>{post.Desc}</p>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = data;
  const paths = posts.map((post) => ({
    params: { slug: post.Slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = data.find((p) => p.Slug === slug);

  return {
    props: { post }
  };
}