import React from "react";
import { Link } from "react-router-dom";

import "./NavbarDesktop.css";
import logoUltimate from "../../assets/logo_ultimate_goal.png";

function NavbarDesktop() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-desktop">
        Accueil
      </Link>
      <Link to="/presentation" className="navbar-desktop">
        Qui sommes-nous ?
      </Link>
      <img
        src={logoUltimate}
        alt="ceci est le logo de l'académie"
        width={130}
        className="logo"
      />
      <Link to="/formules" className="navbar-desktop">
        Nos formules
      </Link>
      <Link to="/contact" className="navbar-desktop">
        Contactez-nous !
      </Link>
    </div>
  );
}

export default NavbarDesktop;
