import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import axios from "axios";
import parse from "html-react-parser";
import Slide from "../../components/AnimComponents/Slide";
import { getAuthor, getFeaturedImage } from "../../utils/utilsFn";
import { POSTS_API_URL } from "../../utils/Constant";
import Head from "next/head";
function SingleBlog({ title, featuredImg, author, content, date }) {
  return (
    <Layout title={`Dr.Draniss Notre blog ${title}`}>
      <div className="flex flex-col items-center justify-center overflow-hidden min-h-screen">
        <Slide>
          <main
            className="flex flex-col bg-gray-200/60 rounded-x
          lg shadow-xl items-center flex-1 mx-5 md:mx-20 py-10 max-w-5xl m-auto"
          >
            <h1 className="text-2xl md:text-6xl font-bold mt-5 mb-5 text-center">
              {title}
            </h1>
            <div className="w-full h-96">
              <img
                src={featuredImg}
                alt="thumb"
                className="w-full h-96 bg-cover object-cover"
              />
            </div>
            <p className="text-sm mt-5">Written by {author}</p>
            <p className="text-sm font-semibold mb-5">
              Published on {new Date(date).toDateString()}
            </p>
            <div className="prose">{parse(content)}</div>
          </main>
        </Slide>
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await axios.get(POSTS_API_URL);
  const posts = res.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await axios.get(`${POSTS_API_URL}/${params.id}`);
  const post = await res.data;

  const featuredImg = await getFeaturedImage(post.featured_media);
  const author = await getAuthor(post.author);

  return {
    props: {
      title: post.title.rendered,
      content: post.content.rendered,
      featuredImg,
      author,
      date: post.date,
    },
    revalidate: 30,
  };
}

export default SingleBlog;
