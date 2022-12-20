import axios from "axios";
import moment from "moment";


const AffichageValidation = ({ absence, fetchData }) => {
  const utilisateur = JSON.parse(localStorage.getItem('user'));

  const handleValidation = () => {
    console.log(absence)
    axios.put(`http://127.0.0.1:3001/validation/${absence._id}`, {
      headers: {
        'Authorization': `Basic ${utilisateur.token}`
      },
      data: {
        statut: 'VALIDEE'
      }
    })
      .then(res => fetchData()) // rechargement de la list
      .catch(err => console.log(err))
  }

  const handleRejet = () => {
    axios.put(`http://127.0.0.1:3001/validation/${absence._id}`, {
      headers: {
        'Authorization': `Basic ${utilisateur.token}`
      },
      data: {
        statut: 'REJETEE'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <tr>
      <td>{moment(absence.dateDebut).format("DD-MM-YYYY")} </td>
      <td>{moment(absence.dateFin).format("DD-MM-YYYY")}</td>
      <td>{absence.type}</td>
      <td>{absence.nom} {absence.prenom}</td>

      <td>
        <button className="btn btn-outline-success me-md-2 btn-sm color-green" onClick={handleValidation}>✓</button>
        <button
          className="btn btn-outline-danger me-md-2 btn-sm color-red"
          onClick={handleRejet}
        >
          ✗
        </button>
      </td>
    </tr>
  );
};

export default AffichageValidation;
