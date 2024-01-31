import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="infos-contact">
      <h1 className="titre-contact">CONTACTEZ-NOUS !</h1>
      <p>
        N'hésitez pas à nous contacter pour avoir davantage d'informations
        concernant nos différentes formules ou toute autre information
        concernant l'académie.
      </p>
      <p>
        Notre équipe s'engage à traiter votre demande dans un délai de 24h
        maximum.
      </p>
      <div className="formulaire-container">
        <form className="form-contact">
          <div className="contain-input">
            <input
              className="classic-input"
              name="nom"
              type="text"
              placeholder="Votre nom"
            />
          </div>
          <div className="contain-input">
            <input
              className="classic-input"
              name="mail"
              type="text"
              placeholder="Votre adresse mail"
            />
          </div>
          <div className="contain-input">
            <input
              className="classic-input"
              name="telephone"
              type="text"
              placeholder="Votre n° de téléphone (facultatif)"
            />
          </div>
          <div className="contain-input">
            <textarea
              className="input-message"
              name="message"
              type="text"
              placeholder="Votre message"
            />
          </div>
          <div className="bouton-envoi">
            <button type="submit" className="bouton-submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
