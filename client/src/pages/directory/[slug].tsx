import Link from "next/link";
import data from "./tutorList";
import Nav from "../../components/Nav";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <>
      <Nav/>
      <div className="row">
        <div className="s-left">
          <img className="p-img" src={post.ProfilePicture} />
        </div>
        <div className="s-right">
          <h1 className="h1font">{post.Name}</h1>
          <p className="p-post">Subject: {post.Subjects}</p>
          <p className="p-post"> Email: {post.Email}</p>
          <p className="p-post">Description: {post.Desc}</p>
          <p className="p-post" >Pricing: ${post.Pricing}/ hour</p>
          <a className="btn btn-secondary" href="/calendar" >Book Now!</a>
          <a className="btn btn-secondary" href="/calendar" >Book Now!</a>

        </div>
      </div>
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