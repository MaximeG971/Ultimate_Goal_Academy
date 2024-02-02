import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../../services/connexion";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { AuthContext } from "../../context/Auth";

function DashboardFormule() {
  const { connected } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (connected.id === 0) {
      navigate("/");
    }
  }, [connected]);

  const [formuleData, setFormuleData] = useState([]);
  const [formuleValue, setFormuleValue] = useState({
    type: "",
    description: "",
    coach_id: "",
  });
  const [coachValue, setCoachValue] = useState([]);
  const [change, setChange] = useState(false);

  const getFormules = async () => {
    try {
      const res = await connexion.get(`/formules`);
      setFormuleData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCoachs = async () => {
    try {
      const res = await connexion.get(`/coachs`);
      setCoachValue(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormuleValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await connexion.post(`/formules`, formuleValue);
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
    getFormules();
    getCoachs();
  }, [change]);

  const deleteData = (id) => {
    try {
      connexion.delete(`/formules/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const loadFormule = (formuleToUpdate) => {
    setFormuleValue(formuleToUpdate);
  };

  const putFormule = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/formules/${formuleValue.id}`, formuleValue);
      setChange(!change);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = (event) => {
    if (formuleValue.id) {
      putFormule(event);
    } else {
      handleSubmit(event);
    }
  };

  return (
    <div className="dashboard-coach">
      <h1>Gestion des formules</h1>
      <div className="tableau-form">
        <table className="table">
          <thead>
            <tr className="titre-table">
              <th>#</th>
              <th>Type</th>
              <th>Description</th>
              <th>Coach</th>
              <th>Delete</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            {formuleData.map((el) => (
              <tr key={el.description}>
                <td>{el.id}</td>
                <td>{el.type}</td>
                <td>{el.description}</td>
                <td>{el.coach_name}</td>
                <td className="button-container" aria-label="delete-button">
                  <DeleteButton onClick={() => deleteData(el.id)} />
                </td>
                <td className="button-container" aria-label="delete-button">
                  <EditButton onClick={() => loadFormule(el)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="formulaire-crud-coach">
          <form onSubmit={handleRequest} className="form-coach">
            <label>
              Type de formule
              <input
                type="text"
                name="type"
                value={formuleValue.type}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description
              <input
                type="text"
                name="description"
                value={formuleValue.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Coach
              <select name="coach_id" onChange={handleChange}>
                <option>Choisir un coach</option>
                {coachValue.map((coach) => {
                  return (
                    <option value={coach.id} key={coach.id}>
                      {coach.name}
                    </option>
                  );
                })}
              </select>
            </label>

            <div className="container-submit-formule">
              <button type="submit" className="bouton-submit-coach">
                {formuleValue.id ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DashboardFormule;
