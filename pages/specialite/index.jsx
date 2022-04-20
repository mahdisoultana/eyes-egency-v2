import React from "react";
import Layout from "../../components/layout/Layout";
import { Revele } from "../../components/AnimComponents/Revele";
import Fade from "../../components/AnimComponents/Fade";
import Link from "next/link";
import Image from "next/image";
function Specialite({ postImgAndAuthor }) {
  return (
    <Layout title="Dr.Draniss Notre Spécialite !">
      <Revele color="bg-white">
        <p className="text-4xl font-bold text-gray-800 lg:p-16 p-4 ">
          Our Specialité
        </p>
      </Revele>
      <Fade>
        <div className="p-4 lg:p-16  lg:pt-0">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Master Cleanse Reliac Heirloom
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them man bun deep jianbing
                  selfies heirloom.
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                {[
                  "specialite1",
                  "specialite2",
                  "specialite3",
                  "specialite4",
                  "specialite5",
                  "specialite6",
                ].map((item, key) => (
                  <Link href={"/specialite/" + item} key={key} passHref>
                    <div className="lg:w-1/3 sm:w-1/2 p-4 " key={item}>
                      <div className=" relative cursor-pointer shadow-lg rounded-lg overflow-hidden">
                        <Image
                          src={postImgAndAuthor || "/images/driss1.png"}
                          width={100}
                          height={100}
                          layout="responsive"
                          priority
                          alt="blog photo"
                          className="max-h-52 w-full object-cover"
                        />
                        <div className="px-8  duration-200 py-10 absolute inset-0 z-10 w-full border-4 border-blue-800 bg-white opacity-0 hover:opacity-100">
                          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                            THE SUBTITLE
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Shooting Stars
                          </h1>
                          <p className="leading-relaxed">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex w-full mb-20 flex-wrap">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                  Master Cleanse Reliac Heirloom
                </h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them man bun deep jianbing
                  selfies heirloom.
                </p>
              </div>
              <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-1/2 ">
                    <img
                      width={100}
                      height={100}
                      layout="responsive"
                      priority
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/500x300"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      width={100}
                      height={100}
                      layout="responsive"
                      priority
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/501x301"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-full">
                    <img
                      width={100}
                      height={100}
                      layout="responsive"
                      priority
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="https://dummyimage.com/600x360"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-full">
                    <img
                      width={100}
                      height={100}
                      layout="responsive"
                      priority
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="https://dummyimage.com/601x361"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      width={100}
                      height={100}
                      layout="responsive"
                      priority
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/502x302"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      width={100}
                      height={100}
                      layout="responsive"
                      priority
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/503x303"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fade>
    </Layout>
  );
}

export default Specialite;
