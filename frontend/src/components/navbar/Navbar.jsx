import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logoUltimate from "../../assets/logo_ultimate_goal.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.backgroundColor = "#383a40";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleMenu();
    }
  };

  return (
    <div
      onClick={toggleMenu}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="navbar-mobile"
    >
      {isOpen ? (
        <RxCross2 className="cross" />
      ) : (
        <IoIosMenu className="burger" />
      )}
      {isOpen && (
        <div className="menu">
          <Link to="/">Accueil</Link>
          <Link to="/presentation">Qui sommes-nous ?</Link>
          <Link to="/formules">Nos formules</Link>
          <Link to="/contact">Contactez-nous !</Link>
        </div>
      )}
      <div className="logo-container">
        <img
          src={logoUltimate}
          className="logo-ultimate"
          alt="ceci est le logo de l'académie"
          width={130}
        />
      </div>
    </div>
  );
}

export default Navbar;
