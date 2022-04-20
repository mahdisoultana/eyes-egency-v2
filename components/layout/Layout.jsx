import Head from "next/head";
import React from "react";

import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import ScrollTopBtn from "./scrolToTopBtn/ScrollTopBtn";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Dr.Draniss Site"}</title>
      </Head>

      <Nav />

      <main className="bg-gray-100 dark:text-white dark:bg-secondary min-h-screen pt-44">
        {children}
      </main>
      <Footer />
      <div className="fixed  bottom-4 right-4 z-[222]">
        <ScrollTopBtn />
      </div>
    </>
  );
}

export default Layout;
