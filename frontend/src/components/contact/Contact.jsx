import React from "react";

function Contact() {
  return (
    <div className="infos-contact">
      <h1>Contactez-nous !</h1>
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
        <input name="nom" type="text" placeholder="Votre nom" />
        <input name="mail" type="text" placeholder="Votre adresse mail" />
        <input
          name="telephone"
          type="text"
          placeholder="Votre n° de téléphone (facultatif)"
        />
        <input name="message" type="text" placeholder="Votre message" />
      </div>
    </div>
  );
}

export default Contact;
