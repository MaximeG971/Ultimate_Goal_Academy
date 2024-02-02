import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../../services/connexion";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { AuthContext } from "../../context/Auth";

import "./DashboardCoach.css";

function DashboardCoach() {
  const { connected } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (connected.id === 0) {
      navigate("/");
    }
  }, [connected]);

  const [coachData, setCoachData] = useState([]);
  const [coachValue, setCoachValue] = useState({
    name: "",
    speciality: "",
    photo: "",
  });
  const [change, setChange] = useState(false);

  const getCoaches = async () => {
    try {
      const res = await connexion.get(`/coachs`);
      setCoachData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoachValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await connexion.post(`/coachs`, coachValue);
      setChange(!change);
      if (response.status === 201) {
        console.info("Données enregistrées !");
      } else {
        console.error(
          "Erreur lors de la soumission des données :",
          response.statusText
        );
      }
    } catch (error) {
      console.error(
        "Erreur lors de la soumission des données: ",
        error.message
      );
    }
  };

  useEffect(() => {
    getCoaches();
  }, [change]);

  const deleteData = (id) => {
    try {
      connexion.delete(`/coachs/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const loadCoach = (coachToUpdate) => {
    setCoachValue(coachToUpdate);
  };

  const putCoach = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/coachs/${coachValue.id}`, coachValue);
      setChange(!change);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = (event) => {
    if (coachValue.id) {
      putCoach(event);
    } else {
      handleSubmit(event);
    }
  };

  return (
    <div className="dashboard-coach">
      <h1>Gestion des coachs</h1>
      <div className="tableau-form">
        <table className="table">
          <thead>
            <tr className="titre-table">
              <th>#</th>
              <th>Nom</th>
              <th>Spécialité</th>
              <th>Photo</th>
              <th>Supprimer</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            {coachData.map((el) => (
              <tr key={el.photo}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.speciality}</td>
                <td>{el.photo}</td>
                <td className="button-container" aria-label="delete-button">
                  <DeleteButton onClick={() => deleteData(el.id)} />
                </td>
                <td className="button-container" aria-label="delete-button">
                  <EditButton onClick={() => loadCoach(el)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="formulaire-crud-coach">
          <form onSubmit={handleRequest} className="form-coach">
            <label>
              Nom du nouveau coach
              <input
                type="text"
                name="name"
                value={coachValue.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Spécialité
              <input
                type="text"
                name="speciality"
                value={coachValue.speciality}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Photo (URL)
              <input
                type="text"
                name="photo"
                value={coachValue.photo}
                onChange={handleChange}
              />
            </label>
            <div className="container-submit-coach">
              <button type="submit" className="bouton-submit-coach">
                {coachValue.id ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DashboardCoach;
