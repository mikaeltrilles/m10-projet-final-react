
import moment from 'moment';
import { Link } from 'react-router-dom';
// import ModifierAbsence from './ModifierAbsence';

const AffichageAbsences = ({ absence, deleteConge, handleSetCongeModi }) => {

    const handleOnclick = () => {
        handleSetCongeModi()
    }

    return (
        <tr>
            <td>{moment(absence.dateDebut).format('DD-MM-YYYY')} </td>
            <td>{moment(absence.dateFin).format('DD-MM-YYYY')}</td>
            <td>{absence.type}</td>
            <td>{absence.statut}</td>

            <td>
                <button onClick={deleteConge}>Supprimer</button>
                {absence.statut === "INITIALE" || absence.statut === "REJETEE" ?
                    <Link to="/modify">
                        <button onClick={handleOnclick}>Modifier</button>
                    </Link>
                    :
                    ''
                }
                <button>Voir</button>
            </td>


        </tr>
    );
};

export default AffichageAbsences;