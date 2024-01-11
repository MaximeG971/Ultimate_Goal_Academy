import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import "./Navbar.css";

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
    >
      {isOpen ? (
        <RxCross2 className="cross" />
      ) : (
        <IoIosMenu className="burger" />
      )}
      {isOpen && (
        <div className="menu">
          <a href="/">Accueil</a>
          <a href="/presentation">Qui sommes-nous ?</a>
          <a href="/formules">Nos formules</a>
          <a href="/contact">Contactez-nous !</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
