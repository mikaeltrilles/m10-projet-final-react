import React from 'react';
import moment from 'moment';

const AffichageJourFerie = ({ jour, setShowModiFerieForm, setJour, deleteJour }) => {
    const utilisateur = JSON.parse(localStorage.getItem('user'));

    const handleModifier = () => {
        setShowModiFerieForm(true)
        setJour({ ...jour });

    }

    const handleDelete = () => {
        deleteJour(jour._id)
    }

    return (
        <tr>
            <td>{moment(jour.date).format("DD-MM-YYYY")} </td>
            <td>{jour.type}</td>
            <td>{jour.jour}</td>
            <td>{jour.commentaire}</td>

            {utilisateur.role === 'ROLE_ADMIN' ?
                ( new Date(jour.date) >= new Date() ?
                    <td>
                        <button className="btn btn-outline-success me-md-2 btn-sm" onClick={handleModifier}>Modifier</button>
                        <button className="btn btn-outline-danger me-md-2 btn-sm" onClick={handleDelete}> Supprimer </button>
                    </td>
                    :
                    <td>Modification non autorisée</td>
                )
                :
                null
            }

        </tr>
    );
};

export default AffichageJourFerie;