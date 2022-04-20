import React from "react";
import Consulter from "./consultez/Consulter";
import Decouvret from "./decouvret/Decouvret";
import FaireTest from "./faireTest/FaireTest";
import Header from "./header/Header";
import NotreCombat from "./notreCombat/NotreCombat";
import Propos from "./propos/Propos";
import Specialite from "./specialite/Specialite";
import InVeiw from "../AnimComponents/Inveiw";

function Accueil() {
  return (
    <>
      <InVeiw slide="up">
        <Header />
      </InVeiw>
      <InVeiw slide="up">
        <Decouvret />
      </InVeiw>
      <InVeiw slide="up">
        <FaireTest />
      </InVeiw>
      <InVeiw slide="up">
        <Specialite />
      </InVeiw>
      <InVeiw slide="up">
        <NotreCombat />
      </InVeiw>
      <InVeiw slide="up">
        <Propos />
      </InVeiw>
      <InVeiw slide="up">
        <Consulter />
      </InVeiw>
    </>
  );
}

export default Accueil;
