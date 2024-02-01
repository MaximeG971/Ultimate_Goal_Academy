import { useEffect, useState } from "react";
import connexion from "../../services/connexion";
import DeleteButton from "./DeleteButton";

function DashboardFormule() {
  const [formuleData, setFormuleData] = useState([]);

  const getFormules = async () => {
    try {
      const res = await connexion.get(`/formules`);
      setFormuleData(res.data);
    } catch (error) {
      console.error(error);
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

  return (
    <div className="dashboard-coach">
      <h1>Gestion des formules</h1>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardFormule;
