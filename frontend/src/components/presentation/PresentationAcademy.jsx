import React from "react";
import "./Presentation.css";

function PresentationAcademy() {
  return (
    <div className="presentation-container">
      <h1 className="titre-principal-presentation">QUI SOMMES-NOUS ?</h1>
      <div className="paragraphe-presentation">
        <h2 className="titre-presentation">ULTIMATE GOAL ACADEMY</h2>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Ultimate Goal Academy a été créée en 2023 par notre coach principal
          Sidiki TRAORÉ. <br />
          Les premières séances d'entraînements individuels et collectifs ont
          débuté en août 2023 pour la saison footballistique 2023/2024.
        </p>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Deux sections sont actuellement ouvertes: U9 et U15. <br />
          Des séances par groupe resreint ou des séances individuelles sont
          données aux joueurs évoluant dans des catégories différentes.
        </p>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Notre académie compte aujourd'hui 42 membres âgés de 6 ans à 16 ans.
        </p>
        <p style={{ textAlign: "center" }}>
          L'ouverture d'une section Baby Foot est prévue pour la saison
          2024/2025.
        </p>
      </div>
      <div className="paragraphe-presentation">
        <h2 className="titre-presentation">NOS OBJECTIFS</h2>
        <p style={{ textAlign: "center" }}>
          À travers ses séances, Ultimate Goal Academy a pour objectifs :
        </p>
        <ul
          style={{
            textAlign: "center",
            padding: 0,
            marginBottom: "10px",
            listStyleType: "none",
          }}
        >
          <li>- Le perfectionnement technique,</li>
          <li>
            - Le développement de l'intelligence de jeu, prise d'informations,
            anticipation,
          </li>
          <li>- Le travail sur la notion d'esprit d'équipe,</li>
          <li>- L'amélioration des qualités individuelles du joueur,</li>
          <li>
            - La gestion des émotions et le solutionnement des problématiques.
          </li>
        </ul>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Nos coachs ont pour principale mission de guider et d'aider les jeunes
          joueurs à trouver leur style de jeu. <br />
          Nos éducateurs les assistent dans l'amélioration de leurs qualités
          innées et naturelles.
        </p>
        <p style={{ textAlign: "center" }}>
          Notre académie accorde une grande importance à la pédagogie positive.
        </p>
      </div>
      <div className="paragraphe-presentation">
        <h2 className="titre-presentation">NOTRE STAFF</h2>
      </div>
    </div>
  );
}

export default PresentationAcademy;
