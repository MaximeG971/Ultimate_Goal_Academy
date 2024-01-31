import { Link } from "react-router-dom";
import contactUg from "../../assets/contact-ug.jpeg";
import presentationUg from "../../assets/presentation-ug.jpeg";
import formulesUg from "../../assets/formules-ug.jpeg";

import "./Home.css";

function Home() {
  return (
    <div className="accueil-contact">
      <div className="cartes-container">
        <div className="accueil-img-container">
          <img
            src={presentationUg}
            alt="visuel contact"
            className="accueil-img"
          />
        </div>
        <div className="bouton-accueil-container">
          <Link to="/presentation">
            <button type="button" className="bouton-redirection">
              Qui sommes-nous ?
            </button>
          </Link>
        </div>
      </div>
      <div className="cartes-container">
        <div className="accueil-img-container">
          <img src={formulesUg} alt="visuel contact" className="accueil-img" />
        </div>
        <div className="bouton-accueil-container">
          <Link to="/formules">
            <button type="button" className="bouton-redirection">
              Nos formules
            </button>
          </Link>
        </div>
      </div>
      <div className="cartes-container">
        <div className="accueil-img-container">
          <img src={contactUg} alt="visuel contact" className="accueil-img" />
        </div>
        <div className="bouton-accueil-container">
          <Link to="/contact">
            <button type="button" className="bouton-redirection">
              Nous contacter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
