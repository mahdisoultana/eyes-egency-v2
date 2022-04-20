import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout/Layout";
import Slide from "../../components/AnimComponents/Slide";

function SingleSpecialite() {
  return (
    <Layout title="Dr.Draniss Notre Spécialite Content !">
      <div className=" container p-16 overflow-hidden">
        <Slide direction={-1}>
          <ReactMarkdown className="prose">
            # Exemple Simple Content Text from HeadLess CSM
          </ReactMarkdown>
        </Slide>
      </div>
    </Layout>
  );
}

export default SingleSpecialite;
