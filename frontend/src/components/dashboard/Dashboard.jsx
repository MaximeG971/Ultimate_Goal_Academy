import React from "react";
import { Link } from "react-router-dom";
import CoachAdmin from "../../assets/coach-admin.jpeg";
import FormuleAdmin from "../../assets/formule-admin.jpeg";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="page-accueil-admin">
      <div className="accueil-admin">
        <h1 className="titre-accueil-admin">Dashboard</h1>
        <div className="cartes-admin">
          <Link to="/admin/dashboard/coach">
            <img src={CoachAdmin} alt="carte coach admin" />
          </Link>
          <Link to="/admin/dashboard/formule">
            <img src={FormuleAdmin} alt="carte formule admin" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
