import React from "react";
import CoachAdmin from "../../assets/coach-admin.jpeg";
import FormuleAdmin from "../../assets/formule-admin.jpeg";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="page-accueil-admin">
      <div className="accueil-admin">
        <h1 className="titre-accueil-admin">Dashboard</h1>
        <div className="cartes-admin">
          <img src={CoachAdmin} alt="carte coach admin" />
          <img src={FormuleAdmin} alt="carte formule admin" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
