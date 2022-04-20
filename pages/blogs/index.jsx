import Link from "next/link";
import React from "react";
import Fade from "../../components/AnimComponents/Fade";
import { Revele } from "../../components/AnimComponents/Revele";
import PostCaption from "../../components/BlogC/PostCaption";

import Layout from "../../components/layout/Layout";

export default function Blogs({
  posts = ["post1", "post2", "post3", "post4"],
}) {
  return (
    <Layout>
      <Fade>
        <div className="w-full bg-white lg:p-12  p-4">
          <div className="header flex items-end justify-between mb-12">
            <div className="title">
              <Revele color="bg-white">
                <p className="text-4xl font-bold text-gray-800 mb-4">
                  Lastest articles
                </p>
              </Revele>
              <p className="text-2xl font-light text-gray-400">
                <Revele color="bg-white" delay={1}>
                  All article are verified by 2 experts and valdiate by the CTO
                </Revele>
              </p>
            </div>
            <div className="text-end">
              <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Search'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter a title"
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <PostCaption post={post} key={i} i={i} />
            ))}
          </div>
        </div>
      </Fade>
    </Layout>
  );
}
