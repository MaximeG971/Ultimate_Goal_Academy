import { useEffect, useState } from "react";
import connexion from "../../services/connexion";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function DashboardFormule() {
  const [formuleData, setFormuleData] = useState([]);
  const [formuleValue, setFormuleValue] = useState({
    type: "",
    description: "",
  });

  const getFormules = async () => {
    try {
      const res = await connexion.get(`/formules`);
      setFormuleData(res.data);
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

  const handleSubmit = async () => {
    try {
      const response = await connexion.post(`/formules`, formuleValue);

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
  }, []);

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

  const putCoach = async () => {
    try {
      await connexion.put(`/coachs/${formuleValue.id}`, formuleValue);
      getFormules();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = (event) => {
    if (formuleValue.id) {
      putCoach(event);
    } else {
      handleSubmit(event);
    }
  };

  return (
    <div className="dashboard-coach">
      <h1>Gestion des formules</h1>
      <div className="formulaire-crud-formule">
        <form onSubmit={handleRequest} className="form-formule">
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
            <input
              type="text"
              name="coachId"
              value={formuleValue.coach_id}
              onChange={handleChange}
              required
            />
          </label>

          <div className="container-submit-formule">
            <button type="submit" className="bouton-submit-formule">
              {formuleValue.id ? "Modifier" : "Ajouter"}
            </button>
          </div>
        </form>
      </div>
      <table className="table">
        <thead>
          <tr className="title-table">
            <th>#</th>
            <th>Type</th>
            <th>Description</th>
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
    </div>
  );
}

export default DashboardFormule;
