import Link from "next/link";
import data from "./tutorList";
import Nav from "../../components/Nav";

export default function Post({ post }) {
  return (
    <>
      <Nav/>
      <main>
        <article>
          <h1>{post.Title}</h1>
          <p>{post.Text}</p>
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