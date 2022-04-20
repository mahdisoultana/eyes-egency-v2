import Link from "next/link";
import { useState, useEffect } from "react";
import { getAuthor, getFeaturedImage } from "../../utils/utilsFn";
import parse from "html-react-parser";
import Slide from "../AnimComponents/Slide";
import Image from "next/image";
export default function Post({ post, i }) {
  const [postImgAndAuthor, setPostImgAndAuthor] = useState({
    featImgUrl: "",
    author: "",
  });
  const author = post.author;
  const media = post.featured_media;
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const author = getAuthor(author);
      const featuredImg = getFeaturedImage(media);

      //   resolve the promises in getAuthor and getFeaturedImg async functions using Promise.all
      Promise.all([author, featuredImg]).then((res) => {
        setPostImgAndAuthor({
          author: res[0],
          featImgUrl: res[1],
        });
      });
    }

    return () => {
      mounted = false;
    };
  }, [author, media]);
  // console.log(post);
  console.log(parse(post.excerpt.rendered)[0].props.children[0]);
  return (
    <Link href={`/blogs/${post.id}`} passHref>
      <Slide dir="y" direction={-1} distance={40} delay={i * 0.1}>
        <div className="overflow-hidden shadow-sm  hover:shadow-xl hover:shadow-gray-500/40 rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <Link
            href={`/blogs/${post.id}`}
            className="w-full block h-full"
            passHref
          >
            <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {" "}
                {post?.title?.rendered || "Example Title"}
              </h3>

              <div
                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                style={{
                  backgroundImage: `url(
                    ${postImgAndAuthor.featImgUrl || "/images/driss2.png"}
                  )`,
                }}
              ></div>

              <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                  <div className="flex justify-center items-center mt-4">
                    <img
                      alt="profil"
                      src="/images/driss1.png"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />

                    <div className="flex flex-col justify-center ml-4 text-sm">
                      <p className="text-gray-800 dark:text-white">
                        {new Date(post.date).toDateString()}
                      </p>
                    </div>
                  </div>
                </h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                  <span className="font-bold text-gray-800 dark:text-gray-200">
                    {" "}
                    Dr.Draniss
                  </span>
                  <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Lire Plus
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Slide>
    </Link>
  );
}
