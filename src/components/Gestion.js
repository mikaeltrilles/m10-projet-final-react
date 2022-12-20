import { Link } from 'react-router-dom';
import AffichageAbsences from './AffichageAbsences';


// import { useState } from 'react';

function Gestion({ absences, setCongeModi }) {
  console.log(absences)

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date de début</th>
            <th scope="col">Date de fin</th>
            <th scope="col">Type</th>
            <th scope="col">Statut</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {absences.map(abs => (
            <AffichageAbsences
              key={abs._id}
              absence={abs}
              deleteConge={() => {
                // quand clicquer le supprimer, actualise state congeModi pour le component Modal 
                setCongeModi(abs);
              }}
              handleSetCongeModi={() => {
                setCongeModi(abs)
              }}

            />
          ))}
        </tbody>
      </table>
      <Link to="/ajout"><button type="submit" className="btn btn-info">➕ Demande d'absence</button></Link>
      {/* Affichage des jours de congés restant et de RTT restant */}
      <div className="col-6">
        <h3 className="text-start">Jours de congés restant</h3>
        <p className="text-start">Il vous reste 25 jours de congés</p>
      </div>
      <div className="col-6">
        <h3 className="text-start">RTT restant</h3>
        <p className="text-start">Il vous reste 5 jours de RTT</p>
      </div>
    </div >
  );
};
export default Gestion