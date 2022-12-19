import moment from "moment";
import { Link } from "react-router-dom";
// import ModifierAbsence from './ModifierAbsence';

const AffichageValidation = ({ absence, deleteConge, handleSetCongeModi }) => {

  return (
    <tr>
      <td>{moment(absence.dateDebut).format("DD-MM-YYYY")} </td>
      <td>{moment(absence.dateFin).format("DD-MM-YYYY")}</td>
      <td>{absence.type}</td>
      <td>{absence.nom} {absence.prenom}</td>

      <td>
        <Link to="/modify">
        <button className="btn btn-outline-success me-md-2 btn-sm" onClick={handleSetCongeModi}>Valider</button>
        </Link>
        <button
          className="btn btn-outline-danger me-md-2 btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={deleteConge}
         
        >
          Rejetter
        </button>
      </td>
    </tr>
  );
};

export default AffichageValidation;
