import React from "react";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import FaireTestC from "../components/pagescomponent/FaireTestC";
function FaireNotreTest() {
  return (
    <Layout title="Dr.Draniss Test Des Yeux Page">
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
        />
      </Head>

      <h1 className="text-3xl pt-12 text-blue-500 text-center font-medium">
        {" "}
        Faire Notre Test !
      </h1>
      <div className="container m-auto xl:p-24 xl:py-4 p-4 pt-8 min-h-screen">
        <h2 className="text-xl text-blue-900 capitalize text-center font-medium mb-8">
          {" "}
          Try To follow the instractions
        </h2>

        <div className="h-ful">
          <FaireTestC />
        </div>
      </div>
    </Layout>
  );
}

export default FaireNotreTest;
