import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AffichageAbsences from './AffichageAbsences';

// import { useState } from 'react';



function Gestion() {

  const backendUrl = 'http://127.0.0.1:3001/'

  const fetchData = () => {
    axios.get(backendUrl + 'absences').then((res) => {
      setAbsences(res.data)
      console.log(res.data)
    })
  }

  const [absences, setAbsences] = useState([])
  useEffect(() => fetchData(), [])

  const deleteConge = (id) => {
    axios.delete(backendUrl + `delete/${id}`)
    setAbsences(absences.filter(abs => abs._id !== id))
  }


  // const [employe, setEmploye] = useState([])
  // const backendUrl = "http://localhost:3001/api/"

  //TODO Affichage des informations des absences


  // TODO Ajouter une absence


  // function jourFerie(annee) {
  //   axios.get(`https://calendrier.api.gouv.fr/jours-feries/metropole/${annee}.json`)
  //     .then((reponse) => {
  //       console.log(reponse.data);
  //     })
  // }
  // jourFerie('2027'); // TODO mettre le select de l'année du calendrier pour affiche les feries de l'année demandée depart 2000 jusqu'a anéée en cours +5 ans

  // function connection(employe) {
  // axios.post(backendUrl + 'login', employe)
  // .then((response) => console.log('Redirection page accueil'))

  // }

  // connection(employe);




  // console.log(absences);

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
          {absences.map(abs => (
            <AffichageAbsences
              key={abs._id}
              absence={abs}
              deleteConge={() => deleteConge(abs._id)} />
          ))}
        </tbody>
      </table>
      <Link to="/ajout"><button type="submit" className="btn btn-primary">➕ Demande d'absence</button></Link>
    </div >
  );
};
export default Gestion