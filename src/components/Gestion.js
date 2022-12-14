import axios from 'axios';
// import { useState } from 'react';



function Gestion() {
  // const [employe, setEmploye] = useState([])
  // const backendUrl = "http://localhost:3001/api/"

//TODO Affichage des informations des absences





// TODO Ajouter une absence


















  function jourFerie(annee) {
    axios.get(`https://calendrier.api.gouv.fr/jours-feries/metropole/${annee}.json`)
      .then((reponse) => {
        console.log(reponse.data);
      })
  }
  jourFerie('2025');

  // function connection(employe) {
    // axios.post(backendUrl + 'login', employe)
      // .then((response) => console.log('Redirection page accueil'))

  // }

  // connection(employe);



}

export default Gestion