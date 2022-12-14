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
  jourFerie('2027'); // TODO mettre le select de l'année du calendrier pour affiche les feries de l'année demandée depart 2000 jusqu'a anéée en cours +5 ans

  // function connection(employe) {
  // axios.post(backendUrl + 'login', employe)
  // .then((response) => console.log('Redirection page accueil'))

  // }

  // connection(employe);



  return (

<h2>nom prenom</h2>






  )
}
export default Gestion