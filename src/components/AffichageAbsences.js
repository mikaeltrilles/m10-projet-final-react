import moment from 'moment'

const AffichageAbsences = ({ absence, deleteConge }) => {

    // FILTRE PAR ID EMPLOYE
    moment.locale();
    return (
        <tr>
            <td>{moment(absence.dateDebut).format('DD.MM.YYYY')} </td>
            <td>{moment(absence.dateFin).format('DD.MM.YYYY')}</td>
            <td>{absence.type}</td>
            <td>{absence.statut}</td>
            <td><button id={absence._id} onClick={deleteConge}>Supprimer</button><button>Modifier</button><button>Voir</button></td>
        </tr>
    );
};

export default AffichageAbsences;