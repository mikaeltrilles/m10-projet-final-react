import { Link } from 'react-router-dom';
import AffichageAbsences from './AffichageAbsences';


// import { useState } from 'react';

function Gestion({absences, setCongeModi}) {

  return (
    <div>
      <table className="table">
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
          {absences.map( abs => (
            <AffichageAbsences
              key={abs._id}
              absence = {abs}
              deleteConge = {() => {
                // quand clicquer le supprimer, actualise state congeModi pour le component Modal 
                setCongeModi(abs);
              }}
              handleSetCongeModi = {()=> {
                setCongeModi(abs)}}
               />
          ))}
        </tbody>
      </table>
      <Link to="/ajout"><button type="submit" className="btn btn-primary">➕ Demande d'absence</button></Link>
    </div >
  );
};
export default Gestion