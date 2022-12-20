import React from 'react';
import moment from 'moment';

const AffichageJourFerie = ({ jour }) => {
    const utilisateur = JSON.parse(localStorage.getItem('user'));
    return (
        <tr>
            <td>{moment(jour.date).format("DD-MM-YYYY")} </td>
            <td>{jour.type}</td>
            <td>{jour.jour}</td>
            <td>{jour.commentaire}</td>

            {/* Si le role est ADMIN et que le jour est supérieur ou égal au jour courant */}
            {(utilisateur.role === 'ROLE_ADMIN' && new Date(jour.date) >= new Date()) ?

                <td>
                    <button className="btn btn-outline-success me-md-2 btn-sm">Modifier</button>
                    <button
                        className="btn btn-outline-danger me-md-2 btn-sm"
                    >
                        Supprimer
                    </button>
                </td>

                :
                <td>Modification non autorisée</td>
    
            }

        </tr>
    );
};

export default AffichageJourFerie;