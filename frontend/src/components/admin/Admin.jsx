import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connexion from "../../services/connexion";

import "./Admin.css";

const user = { email: "", password: "" };

function Admin() {
  const [credentials, setCredentials] = useState(user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showToastMessage = () => {
    toast.success("Identifiants corrects, vous allez être redirigé !", {
      position: "top-right",
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Identifiants incorrects, essayez à nouveau !", {
      position: "top-right",
    });
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      await connexion.post(`/login`, credentials);
      showToastMessage();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      showToastErrorMessage(error);
      setCredentials(user);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="titre-login">Espace de connexion</h1>
        <form onSubmit={handleRequest} className="form-login">
          <div className="contain-input-login">
            <input
              className="input-login"
              name="email"
              type="email"
              placeholder="Votre adresse mail"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contain-input-login">
            <input
              className="input-login"
              name="password"
              type="password"
              placeholder="Votre mot de passe"
              onChange={handleChange}
              required
            />
          </div>
          <div className="bouton-connexion">
            <button type="submit" className="bouton-submit-connexion">
              Se connecter
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Admin;
