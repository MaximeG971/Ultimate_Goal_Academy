import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connexion from "../../services/connexion";

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
    <div>
      <form onSubmit={handleRequest} className="form-contact">
        <div className="contain-input">
          <input
            className="classic-input"
            name="email"
            type="email"
            placeholder="Votre adresse mail"
            onChange={handleChange}
            required
          />
        </div>
        <div className="contain-input">
          <input
            className="classic-input"
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
  );
}

export default Admin;
