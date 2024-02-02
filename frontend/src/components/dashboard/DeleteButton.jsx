import PropTypes from "prop-types";
import "./DeleteButton.css";

function DeleteButton({ onClick }) {
  return (
    <button type="button" className="delete-button" onClick={onClick}>
      Supprimer
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
