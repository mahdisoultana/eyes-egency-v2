import React from "react";
import Layout from "../components/layout/Layout";

import Link from "next/link";
import ContactC from "../components/contact/Contact";
function Contact() {
  return (
    <Layout title="Dr.Draniss Contactez-Moi !">
      <div className="container m-auto xl:p-24 xl:py-4 p-4 pt-8 ">
        <ContactC />
      </div>
    </Layout>
  );
}

export default Contact;
