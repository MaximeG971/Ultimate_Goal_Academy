import React from "react";
import Instagram from "../../assets/instagram.png";
import TikTok from "../../assets/tiktok.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="https://www.instagram.com/ultimateg_academy/?igsh=dzF4NTN1ZmU1NGhu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.tiktok.com/@siditraining"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TikTok} alt="TikTok" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
