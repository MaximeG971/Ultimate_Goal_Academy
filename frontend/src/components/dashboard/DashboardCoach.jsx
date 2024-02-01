import { useEffect, useState } from "react";
import connexion from "../../services/connexion";
import DeleteButton from "./DeleteButton";

import "./DashboardCoach.css";

function DashboardCoach() {
  const [coachData, setCoachData] = useState([]);

  const getCoaches = async () => {
    try {
      const res = await connexion.get(`/coachs`);
      setCoachData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoaches();
  }, []);

  const deleteData = (id) => {
    try {
      connexion.delete(`/coachs/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-coach">
      <table className="table">
        <thead>
          <tr className="titre-table">
            <th>#</th>
            <th>Nom</th>
            <th>Spécialité</th>
            <th>Photo</th>
            <th>Delete</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardCoach;