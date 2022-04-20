import React from "react";
import Layout from "../components/layout/Layout";
import FaireTestC from "../components/pagescomponent/FaireTestC";
import Link from "next/link";
function FaireNotreTest() {
  return (
    <Layout title="Dr.Draniss Page Not found">
      <h1 className="text-3xl pt-12 text-blue-500 text-center font-medium">
        {" "}
        This Page Not Found Please Go to Home !
      </h1>
      <div className="container m-auto xl:p-24 xl:py-4 p-4 pt-8 min-h-screen flex justify-center items-center">
        <Link href="/">
          <a className="btn">Back Home</a>
        </Link>
      </div>
    </Layout>
  );
}

export default FaireNotreTest;
