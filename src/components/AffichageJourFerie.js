import React from 'react';
// import moment from 'moment';

const AffichageJourFerie = ({jour}) => {
    const utilisateur = JSON.parse(localStorage.getItem('user'));
    return (
        <tr>
            <td>{jour.date} </td>
            <td>{jour.type}</td>
            <td>{jour.jour}</td>
            <td>{jour.commentaire}</td>

            { utilisateur.role === 'ROLE_ADMIN'  && 
            <td>
                <button className="btn btn-outline-success me-md-2 btn-sm" >Modifier</button>
                <button
                    className="btn btn-outline-danger me-md-2 btn-sm"

                >
                    Supprimer
                </button>
            </td>
            }

        </tr>
    );
};

export default AffichageJourFerie;