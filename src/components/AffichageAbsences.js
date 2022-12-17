import moment from "moment";
import { Link } from "react-router-dom";
// import ModifierAbsence from './ModifierAbsence';

const AffichageAbsences = ({ absence, deleteConge, handleSetCongeModi }) => {

  return (
    <tr>
      <td>{moment(absence.dateDebut).format("DD-MM-YYYY")} </td>
      <td>{moment(absence.dateFin).format("DD-MM-YYYY")}</td>
      <td>{absence.type}</td>
      <td>{absence.statut}</td>

      <td>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={deleteConge}
         
        >
          Supprimer
        </button>
        <Link to="/modify">
          <button onClick={handleSetCongeModi}>Modifier</button>
        </Link>
        <button>Voir</button>
      </td>
    </tr>
  );
};

export default AffichageAbsences;
