import React from "react";
import Header from "./header/Header";
import Explenation from "./explenation/Explenation";
import Item from "./item/Item";
import Blogs from "./blogs/Blogs";
import InVeiw from "../AnimComponents/Inveiw";
const data = [
  {
    month: "Février",
    url: "https://draniss.ma/wp-content/uploads/2022/01/mother-with-her-son-is-having-fun-outdoors-in-the-2021-12-27-22-41-31-utc-min-scaled.jpg?id=6076",
    title: "L'évolution de la vue : de la naissance à l'âge adulte.",
  },
  {
    month: "Mars",
    url: "https://draniss.ma/wp-content/uploads/2022/01/black-teen-guy-rubbing-tired-eyes-sitting-at-desk-2021-10-11-23-16-36-utc-min-scaled.jpg?id=6071",
    title: "L'œil et les allergies saisonnières.",
  },
  {
    month: "Avrail",
    url: "https://draniss.ma/wp-content/uploads/2022/01/arabic-lantern-ramadan-kareem-background-2021-08-29-23-35-31-utc-min-scaled.jpg?id=6070",
    title: "La santé visuelle pendant le mois de Ramadan .",
  },
  {
    month: "Mai",
    url: "https://draniss.ma/wp-content/uploads/2022/01/woman-look-at-the-computer-screen-2021-08-29-14-49-28-utc-min.jpg?id=6078",
    title: "Tout pour protéger vos yeux des écrans.",
  },
  {
    month: "Juin",
    url: "https://draniss.ma/wp-content/uploads/2022/01/happy-little-girl-in-splashes-on-water-playground-2021-08-29-17-36-15-utc-min-scaled.jpg?id=6074",
    title: "Les conseils pour maintenir une bonne santé oculaire en été.",
  },
  {
    month: "September",
    url: "https://draniss.ma/wp-content/uploads/2022/01/spring-meadow-2021-08-27-09-34-55-utc-min-scaled.jpg?id=6077",
    title:
      "Les recommandations sur la santé oculaire des enfants pour la rentrée scolaire.",
  },
  {
    month: "October",
    url: "https://draniss.ma/wp-content/uploads/2022/01/family-generation-green-eyes-genetics-concept-2021-09-03-07-44-02-utc-min-scaled.jpg?id=6073",
    title: "La Journée Mondiale de la Vue.",
  },
  {
    month: "November",
    url: "https://draniss.ma/wp-content/uploads/2022/01/human-eye-2021-08-28-21-42-17-utc-min.jpg?id=6075",
    title: "Comment préserver votre vision en hiver ?",
  },
];

function GuideOeil() {
  return (
    <>
      <InVeiw slide="down">
        <Explenation />
      </InVeiw>
      <Header />
      {data.map((item, key) => (
        <InVeiw
          key={key}
          hidden={{
            x: (key % 2 ? 1 : -1) * 100,

            transition: { type: "spring", duration: 6 },
          }}
          animate={{
            transition: { type: "spring", duration: 3, stiffness: 200 },
          }}
          threshold={0.8}
        >
          <Item {...item} inverse={key % 2} />
        </InVeiw>
      ))}
      <Blogs />
    </>
  );
}

export default GuideOeil;
