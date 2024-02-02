import PropTypes from "prop-types";
import "./EditButton.css";

function EditButton({ onClick }) {
  return (
    <button type="button" className="edit-button" onClick={onClick}>
      Modifier
    </button>
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditButton;
