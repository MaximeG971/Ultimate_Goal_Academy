import React, { useEffect, useState } from "react";
import connexion from "../../services/connexion";
import "./Formule.css";

function Formule() {
  const [formules, setFormules] = useState([]);
  const formuleData = async () => {
    try {
      const res = await connexion.get("/formules");
      setFormules(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    formuleData();
  }, []);

  return (
    <div className="formule-page">
      <h1 className="titre-formule">NOS FORMULES</h1>
      <h2>Notre académie propose 3 types de formules:</h2>
      <div className="liste-formule">
        {formules &&
          formules.map((el) => (
            <div className="formule-container" key={el.description}>
              <h3>{el.type}</h3>
              <p>{el.description}</p>
              <p>Animation des séances assurée par: {el.coach_name}</p>
            </div>
          ))}
      </div>
      <p className="infos-formule">
        Pour avoir davantage d'informations sur le contenu de nos formules ou
        encore <br />
        sur nos tarifs, n'hésitez pas à nous envoyer un mail via notre rubrique
        "Contactez-nous !".
      </p>
    </div>
  );
}

export default Formule;
