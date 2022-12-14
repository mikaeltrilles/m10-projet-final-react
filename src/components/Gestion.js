import axios from 'axios';

function Gestion() {

  // const backendUrl = "http://127.0.0.1:3001/api/"

  function jourFerie(annee) {
    axios.get(`https://calendrier.api.gouv.fr/jours-feries/metropole/${annee}.json`)
      .then((reponse) => {
        console.log(reponse.data);
      })
  }

  jourFerie('2025');


}

export default Gestion