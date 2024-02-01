import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

function Contact() {
  const [formValue, setFormValue] = useState({
    nom: "",
    mail: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showToastMessage = () => {
    toast.success("Votre message a bien été envoyé", {
      position: "top-right",
    });
  };

  const showToastErrorMessage = () => {
    toast.error("L'envoi a échoué, essayez à nouveau !", {
      position: "top-right",
    });
  };

  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = import.meta.env;

  const emailjsServiceId = VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = VITE_EMAILJS_PUBLIC_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, e.target, emailjsPublicKey)

      .then(
        (result) => {
          showToastMessage(result);
        },
        (error) => {
          showToastErrorMessage(error);
        }
      );
  };

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
        <form onSubmit={handleSubmit} className="form-contact">
          <div className="contain-input">
            <input
              className="classic-input"
              name="nom"
              type="text"
              placeholder="Votre nom"
              value={formValue.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contain-input">
            <input
              className="classic-input"
              name="mail"
              type="text"
              placeholder="Votre adresse mail"
              value={formValue.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contain-input">
            <input
              className="classic-input"
              name="telephone"
              type="text"
              placeholder="Votre n° de téléphone (facultatif)"
              value={formValue.telephone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contain-input">
            <textarea
              className="input-message"
              name="message"
              type="text"
              placeholder="Votre message"
              value={formValue.message}
              onChange={handleChange}
              maxLength={400}
              required
            />
          </div>
          <div className="bouton-envoi">
            <button type="submit" className="bouton-submit" value="Submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
