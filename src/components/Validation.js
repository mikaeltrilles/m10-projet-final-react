import { Link } from 'react-router-dom';
import axios from 'axios';

import { useState, useEffect } from 'react';
import AffichageValidation from './AffichageValidation';

function Validation({setCongeModi}) {
  const utilisateur = JSON.parse(localStorage.getItem('user'));

  const backendUrl = 'http://127.0.0.1:3001/';

  const fetchData = () => {
    axios.get(backendUrl + 'validation', {
        headers: {
            'Authorization': `Basic ${utilisateur.token}` 
          }
    })
        .then( res => setAbsences(res.data) )
        .catch( err => console.log(err))
}

const [absences, setAbsences] = useState([]);

// const [congeModi, setCongeModi] = useState({});

useEffect(() => fetchData(), []);

  console.log(absences)

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date de début</th>
            <th scope="col">Date de fin</th>
            <th scope="col">Type</th>
            <th scope="col">Nom</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {absences.map( abs => (
            <AffichageValidation
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
export default Validation